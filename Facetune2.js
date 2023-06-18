var obj = JSON.parse($response.body);

obj =

{
  "receipt": {
    "environment": "production",
    "originalPurchaseDateTime": 1588772151000,
    "transactions": [
      {
        "originalPurchaseDateTime": 1649046267000,
        "isTrialPeriod": false,
        "originalTransactionId": "300001083939849",
        "productId": "com.lightricks.Facetune2.Retouch.Vibrance",
        "purchaseDateTime": 1649046267000,
        "quantity": 1,
        "isIntroOfferPeriod": false,
        "transactionId": "300001083939849"
      },
      {
        "originalPurchaseDateTime": 1649046228000,
        "isTrialPeriod": false,
        "originalTransactionId": "300001083939458",
        "productId": "com.lightricks.Facetune2.Retouch.Auto",
        "purchaseDateTime": 1649046228000,
        "quantity": 1,
        "isIntroOfferPeriod": false,
        "transactionId": "300001083939458"
      },
      {
        "originalPurchaseDateTime": 1649046028000,
        "isTrialPeriod": false,
        "originalTransactionId": "300001083937671",
        "productId": "com.lightricks.Facetune2.LightFX",
        "purchaseDateTime": 1649046028000,
        "quantity": 1,
        "isIntroOfferPeriod": false,
        "transactionId": "300001083937671"
      },
      {
        "originalPurchaseDateTime": 1681595083000,
        "isTrialPeriod": false,
        "originalTransactionId": "300001420697607",
        "productId": "com.lightricks.Facetune2.V3.PricingJul22D.NT.OneTimePayment",
        "purchaseDateTime": 1681595082000,
        "quantity": 1,
        "isIntroOfferPeriod": false,
        "transactionId": "300001420697607"
      },
      {
        "originalPurchaseDateTime": 1672697592000,
        "isTrialPeriod": true,
        "originalTransactionId": "300001317802090",
        "productId": "com.lightricks.Facetune2.V3.PricingAug22M10Trial.1WTrial.Yearly",
        "purchaseDateTime": 1672697591000,
        "quantity": 1,
        "isIntroOfferPeriod": false,
        "transactionId": "300001317802090",
        "expiresDateTime": 1673302391000
      },
      {
        "originalPurchaseDateTime": 1657412587000,
        "isTrialPeriod": false,
        "originalTransactionId": "300001162445960",
        "productId": "com.lightricks.Facetune2.Subscription.Basic.HalfPrice.NoTrial.Monthly",
        "purchaseDateTime": 1657412584000,
        "quantity": 1,
        "isIntroOfferPeriod": false,
        "transactionId": "300001162445960",
        "expiresDateTime": 1660090984000
      },
      {
        "originalPurchaseDateTime": 1654829598000,
        "isTrialPeriod": true,
        "originalTransactionId": "300001137089991",
        "productId": "com.lightricks.Facetune2.V3.25Off.TrialExperiment1Var7DaysTrial.Yearly",
        "purchaseDateTime": 1654829597000,
        "quantity": 1,
        "isIntroOfferPeriod": false,
        "transactionId": "300001137089991",
        "expiresDateTime": 1655434397000
      },
      {
        "originalPurchaseDateTime": 1649047332000,
        "isTrialPeriod": true,
        "originalTransactionId": "300001083950676",
        "productId": "com.lightricks.Facetune2.Subscription.Basic.HalfPrice.Yearly",
        "purchaseDateTime": 1649047331000,
        "quantity": 1,
        "isIntroOfferPeriod": false,
        "transactionId": "300001083950676",
        "expiresDateTime": 1651639331000
      }
    ],
    "inAppPurchases": [
      {
        "originalTransactionId": "300001083939849",
        "originalPurchaseDateTime": 1649046267000,
        "productId": "com.lightricks.Facetune2.Retouch.Vibrance",
        "transactionId": "300001083939849"
      },
      {
        "originalTransactionId": "300001083939458",
        "originalPurchaseDateTime": 1649046228000,
        "productId": "com.lightricks.Facetune2.Retouch.Auto",
        "transactionId": "300001083939458"
      },
      {
        "originalTransactionId": "300001083937671",
        "originalPurchaseDateTime": 1649046028000,
        "productId": "com.lightricks.Facetune2.LightFX",
        "transactionId": "300001083937671"
      },
      {
        "originalTransactionId": "300001420697607",
        "originalPurchaseDateTime": 1649046228000,
        "productId": "com.lightricks.Facetune2.V3.PricingJul22D.NT.OneTimePayment",
        "transactionId": "300001420697607"
      }
    ],
    "receiptType": "Production",
    "subscription": {
      "expired": false,
      "isFraud": false,
      "originalPurchaseDateTime": 1681595083000,
      "originalTransactionId": "300001420697607",
      "productId": "com.lightricks.Facetune2.V3.PricingJul22D.NT.OneTimePayment",
      "lastPurchaseDateTime": 1681595082000,
      "transactionId": "300001420697607",
      "expiresDateTime": 4682199882000
    }
  },
  "bundle": "com.lightricks.Facetune2",
  "originalPurchaseDateTime": 1588772151000,
  "requestId": "63aaed41-bd31-4bdc-b60f-77f702700ed8",
  "currentDateTime": 1683168347284,
  "valid": true
}
$done({body: JSON.stringify(obj)});


