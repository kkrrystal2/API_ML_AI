# API_ML_AI
Final project product requirements


|         |            |
| ------------- |:-------------:|
| Target release     | 未定 |
| Epic      |  菜品识别与相关店铺推荐   |
| Document status | 已开始      |
| Designer        | 甘瑜 |
| Developer       | 甘瑜 |
| QA | 甘瑜  |


## Goals
1. 为减肥的人控制一天的热量.  
2. 用户通过返还的百度词条，查看是否有过敏原.


## Background and strategic fit
1.对于减肥的人来说，要控制热量摄入，但热量计算很困难.  
2.有时候，用户可能不知道食物的名字.  
3.所以产品使用图像识别，用拍照就能检测出热量的方式来解决热量计算困难的问题.  
4.如果用户觉得此摄入量没问题，还可以点击搜索来实现相关菜品店铺的推荐.


## Assumptions
1. 用户使用该产品时，主要是在手机的环境下.  
2. 用户上传的菜品图片，可能会含有多种食物.  
3. 可能会由于泛化能力弱，导致食品检测错误.  
(......)


## Requirements
|    #     |    Title     |       User story     |      Importance     |      Notes     |
| ------------- |:-------------:|:-------------:|:-------------:|:-------------:|
| 1        |   热量含量    | 用户想要知道食物的热量 | Must Have |  |  
| 2        |   过敏原    | 用户想要是否对该食物过敏 | Must Have | 食物的成分 |


## User interaction and design  
![Image text](./pro.jpg)


## Questions
|    Question     |       Outcome     |
| ------------- |:-------------:|
|   食物识别      |  使用百度API-菜品识别    |  



## Not doing
* 用户想要记录一天的热量摄入.  
