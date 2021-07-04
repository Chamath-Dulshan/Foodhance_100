import pandas as pd 
import numpy as np 
import matplotlib.pyplot as plt
from statsmodels.tsa.api import ExponentialSmoothing, SimpleExpSmoothing, Holt
import statsmodels.api as sm
from datetime import datetime, timedelta
import warnings
import sys

warnings.filterwarnings("ignore")

df = pd.read_excel('Sunquick.xlsx')
df['DATE'] = df['DATE'].astype('datetime64[ns]')

r = pd.date_range(start=df.DATE.min(), end=df.DATE.max())
df = df.set_index('DATE').reindex(r).fillna(0.0).rename_axis('DATE').reset_index()
df['DATE'] = pd.to_datetime(df['DATE']).dt.date

df = df.interpolate();
df.QUANTITY = df.QUANTITY.round()

dataLenght = len(df)

forcastDayCount = int(sys.argv[1])
predictionFrom = 0
predictionTo = dataLenght

for x in range(forcastDayCount):
    date = datetime.strptime(str(df['DATE'][x + dataLenght - 1]), "%Y-%m-%d")
    modified_date = date + timedelta(days=1)
    modified_date = str(modified_date)[:len(str(modified_date)) - 9]
    df.loc[len(df.index)] = [str(modified_date), '', '', '', 0]

df = df[['DATE', 'QUANTITY']]
df['DATE'] = df['DATE'].astype('datetime64[ns]')
train = df[predictionFrom:predictionTo]
test = df[predictionTo:]

df['Timestamp'] = pd.to_datetime(df.DATE, format='%d-%m-%Y %H:%M')
df.index = df.Timestamp
df = df.resample('D').mean()
train['Timestamp'] = pd.to_datetime(train.DATE, format='%d-%m-%Y %H:%M')
train.index = train.Timestamp
train = train.resample('D').mean()
test['Timestamp'] = pd.to_datetime(test.DATE, format='%d-%m-%Y %H:%M')
test.index = test.Timestamp
test = test.resample('D').mean()

y_hat_avg = test.copy()
fit1 = ExponentialSmoothing(np.asarray(train['QUANTITY']), seasonal_periods=10, trend='add', seasonal='add', ).fit()
y_hat_avg['Holt_Winter'] = fit1.forecast(len(test))
predicted = y_hat_avg['Holt_Winter']
plt.figure(figsize=(16, 8))
plt.plot(train['QUANTITY'], label='Train')
plt.plot(test['QUANTITY'], label='Test')
plt.plot(y_hat_avg['Holt_Winter'], label='Prediction')
plt.legend(loc='best')
plt.show()
# predicted = [round(num, 0) for num in predicted]
# print(predicted)