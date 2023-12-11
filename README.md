# NESTJS Html to Pdf

this package generate pdf from a html template.

> Download this packege from [NPM](https://www.npmjs.com/package/@leninlb/nestjs-html-to-pdf) or [Github](https://github.com/leninplts/nestjs-html-to-pdf).

## Installation

`npm i @leninlb/nestjs-html-to-pdf`.

## Initialization

Into your `**.service.ts` file import `createPdf()`.
```ts
import { Injectable } from '@nestjs/common';
import { createPdf } from '@leninlb/nestjs-html-to-pdf';
import * as path from 'path';
```

Tha function expect 3 parameters **createPdf([filePath], [options], [data])**

- `filePath` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)> It's **required**, HTML file path.
- `options?` <[PDFOptions](https://pptr.dev/api/puppeteer.pdfoptions)> It's **optional**, Defaul value:
```js
{
    format: 'a4',
    printBackground: true,
    margin: {
        left: '10mm',
        top: '10mm',
        right: '10mm',
        bottom: '10mm',
    }
}
```
To se all options [see this link](https://pptr.dev/api/puppeteer.pdfoptions)
- `data?` <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object 'Object')> It's optional.

## Usage

### Quick usage example
`**.servise.ts` file
``` ts
firstExample() {
    const filePath = path.join(process.cwd(), 'templates', 'pdf-profile.hbs');
    return createPdf(filePath);
}
```
`**/pdf-profile.hbs`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap");

      /* Elaborado por Pedro Diaz Guarniz */

      :root {
        --bg-primary: #e8e8e8;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: "Roboto Condensed", sans-serif;
        background-color: var(--bg-primary);
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .container {
        width: 480px;
        height: 800px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 32px;
        padding-bottom: 32px;
      }

      .container__card {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 56px 80px 160px 1fr;
      }

      .card__head-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .card__head-title-code span {
        font-size: 14 px;
        font-weight: 400;
        color: #7e828e;
      }

      .card__head-title-icon-box {
        width: 32px;
        height: 32px;
        border-radius: 4px;
        background-color: #f7f7f7;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        outline: none;
        border: none;
      }

      .card__head-title-icon-box:hover {
        background-color: #e8e8e8;
      }

      .card__head-info-person {
        margin-bottom: 8px;
      }

      .card__head-info-person:has(span) {
        font-size: 32px;
        font-weight: 700;
      }

      .card__head-info-status:has(span) {
        background-color: #d4f6dc;
        display: inline-block;
        padding: 4px 8px;
        border-radius: 4px;
        color: #12692d;
      }

      .card__head-itinerario {
        margin-top: 16px;
        display: grid;
        grid-template-columns: 1fr 1px 1fr;
        grid-template-rows: 1fr;
        border: 1px solid #e7e8ea;
        border-radius: 16px;
      }

      .divider {
        width: 1px;
        height: 100%;
        background-color: #e7e8ea;
      }

      .card__head-itinerario-check {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .card__head-itinerario-check ion-icon {
        font-size: 28px;
        color: #606377;
        margin-bottom: 8px;
      }

      .card__head-itinerario-check span {
        font-size: 16px;
        font-weight: 400;
        color: #606377;
        margin-bottom: 4px;
      }

      .card__head-itinerario-check p {
        font-size: 16px;
        font-weight: 400;
        color: #000;
        letter-spacing: 1px;
      }

      .card__body-coste {
        width: 100%;
        background-color: #f4f4f6;
        border-radius: 16px;
        margin-top: 16px;
        padding: 16px;
      }

      .card__body-coste-details {
        display: grid;
        grid-template-columns: 1fr;
        height: 100%;
        grid-template-rows: 48px 32px 1fr 48px;
      }

      .card__body-coste-details-codes {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .card__body-coste-details-codes .code {
        font-size: 14px;
        font-weight: 500;
        color: #389fff;
      }

      .card__body-coste-details-codes .date {
        font-size: 14px;
        font-weight: 500;
        color: #7e828e;
      }

      .card__body-coste-details h3 {
        padding-top: 16px;
      }

      .card__body-coste-details-money {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        height: fit-content;
      }

      .card__body-coste-details-money .coste {
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 8px;
        color: #626678;
      }

      .card__body-coste-details-money .bage {
        display: flex;
        justify-content: start;
        column-gap: 8px;
      }

      .card__body-coste-details-money .bage span {
        display: inline-block;
        background-color: #f4f4f6;
        padding: 4px 8px;
        border-radius: 4px;
      }

      .card__body-coste-details-money .bage .red {
        background-color: #ffdcda;
        color: #b85a55;
      }

      .card__body-coste-details-money .bage .lila {
        background-color: #eedbf9;
        color: #54276d;
      }

      .card__body-coste-details-money .bage .blue {
        background-color: #d0e3f4;
        color: #10569c;
      }

      .card__body-coste-details-money .bage .yellow {
        background-color: #ffeacb;
        color: #9c6927;
      }

      .card__body-coste-details-money .item {
        margin-bottom: 16px;
        border-bottom: 1px solid #e7e8ea;
        padding-top: 8px;
        padding-bottom: 8px;
      }

      .Total {
        display: flex;
        justify-content: end;
        align-items: center;
        margin-bottom: 8px;
        column-gap: 8px;
        font-weight: 700;
      }

      .card__body-coste-details-money .bage .lila:hover {
        background-color: #d9bff9;
        cursor: pointer;
      }

      .card__body-coste-details-money .bage .red:hover {
        background-color: #f9c6c3;
        cursor: pointer;
      }

      .card__body-coste-details-money .bage .blue:hover {
        background-color: #b8d9f4;
        cursor: pointer;
      }

      .card__body-coste-details-money .bage .yellow:hover {
        background-color: #f4e2b8;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <body>
      <div class="container">
        <div class="container__card">
          <!-- Titulo de la Card -->
          <div class="card__head-title">
            <div class="card__head-title-code">
              <span>BC-GLGWPAQ6</span>
            </div>
            <div class="card__head-title-icon">
              <button class="card__head-title-icon-box">
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>
          </div>
          <!-- Información de la card -->
          <div class="card__head-info">
            <div class="card__head-info-person">
              <span>Peter Diaz</span>
            </div>
            <div class="card__head-info-status">
              <span>Paid</span>
            </div>
          </div>
          <!-- Itinerario de la Card -->
          <div class="card__head-itinerario">
            <div class="card__head-itinerario-check">
              <ion-icon name="log-in-outline"></ion-icon>
              <span>Check In</span>
              <p>November 22, 2023</p>
            </div>
            <div class="divider"></div>
            <div class="card__head-itinerario-check">
              <ion-icon name="log-out-outline"></ion-icon>
              <span>Check Out</span>
              <p>November 24, 2023</p>
            </div>
          </div>
          <!-- Información de Pago -->
          <div class="card__body-coste">
            <div class="card__body-coste-details">
              <h3>Airbnb Payout</h3>
              <div class="card__body-coste-details-codes">
                <a href="https://www.google.com/" target="_blank"><span class="code">0G42WUS6TQ4ra9jfDKXpVEMBID</span></a>
                <span class="date">December 22, 2023</span>
              </div>

              <div class="card__body-coste-details-money">
                <!-- Item 1 -->
                <div class="item">
                  <div class="coste">
                    <span>Reservation</span>
                    <span>$146.00</span>
                  </div>
                  <div class="bage">
                    <span class="red">AirbnbGeneral1</span>
                    <span class="lila">AirbnbGeneral1</span>
                  </div>
                </div>
                <!-- Item 2 -->
                <div class="item">
                  <div class="coste">
                    <span>Cleaning fee</span>
                    <span>$80.00</span>
                  </div>
                  <div class="bage">
                    <span class="red">AirbnbGeneral1</span>
                    <span class="blue">Cleaning_Fee</span>
                  </div>
                </div>
                <!-- Item 3 -->
                <div class="item">
                  <div class="coste">
                    <span>Service fee</span>
                    <span>$8.13</span>
                  </div>
                  <div class="bage">
                    <span class="red">AirbnbGeneral1</span>
                    <span class="yellow">OTA_Fee</span>
                  </div>
                </div>
              </div>

              <div class="Total">
                <span>Total</span>
                <span>$234.13</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
    </body>
  </body>
</html>
```

`**.controller.ts` file
```ts
@Get('pdf')
async generatePdf(@Res() res) {
const buffer = await this.appService.firstExample();
res.set({
    // pdf
    'Content-Type': 'application/pdf',
    'Content-Disposition': `attachment; filename=pdf.pdf`,
    'Content-Length': buffer.length,
    // prevent cache
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Expires: 0,
});
res.end(buffer);
}
```
Result
![image](https://raw.githubusercontent.com/leninplts/nestjs-html-to-pdf/main/templates/generated-pdf.png)

## Usage with custom data

`**.service.ts` file:
```ts
secondExample() {
    const data = {
    title: 'My PDF file',
    status: 'paid',
    invoiceId: '#123-123',
    customerName: 'Saúl Escandón',
    customerAddress: '1234 Main St',
    customerCity: 'Huánuco',
    customerState: 'Huánuco',
    customerCountry: 'Perú',
    customerPhone: '555-555-5555',
    items: [
            {
            description: 'custom suit',
            detail: {
                color: 'blue',
                size: '42',
            },
            price: {
                price0: 1500.0,
                price: 1050.0,
                save: 25,
            },
            quantity: 1,
            image:
                'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp',
            },
            {
            description: 'playstation 5',
            detail: {
                color: 'white',
                size: '45cmx45cm',
            },
            price: {
                price0: 500.0,
                price: 250.0,
                save: 50,
            },
            quantity: 2,
            image:
                'https://promart.vteximg.com.br/arquivos/ids/931599-1000-1000/image-b08a9ed36e114598bc56d7d4a5e7dd2d.jpg?v=637569550232800000',
            },
      ],
      subTotal: 1550.0,
      shipping: 15.0,
      total: 1565.0,
    };
    const options = {
      format: 'A4',
      displayHeaderFooter: true,
      margin: {
        left: '10mm',
        top: '25mm',
        right: '10mm',
        bottom: '15mm',
      },
      headerTemplate: `<div style="width: 100%; text-align: center;"><span style="font-size: 20px;">@saemhco CORP</span><br><span class="date" style="font-size:15px"><span></div>`,
      footerTemplate:
        '<div style="width: 100%; text-align: center; font-size: 10px;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>',
      landscape: true,
    };
    const filePath = path.join(process.cwd(), 'templates', 'pdf-invoice.hbs');;
    return createPdf(filePath, options, data);
}
```

`**/pdf-invoice.hbs`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{title}}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  </head>
    <body>
        <div class="card">
            <div class="card-body">
                <div class="container mb-5 mt-3">
                <div class="row d-flex align-items-baseline">
                    <div class="col-xl-9">
                    <p style="color: #7e8d9f;font-size: 20px;">Invoice &gt;&gt; <strong>ID: {{invoiceId}}</strong></p>
                    </div>
                </div>
                <div class="container">
                    <div class="col-md-12">
                    </div>
                    <div class="row">
                    <div class="col-8">
                        <ul class="list-unstyled">
                        <li class="text-muted">To: <span style="color:#8f8061 ;">{{customerName}}</span></li>
                        <li class="text-muted">{{customerAddress}} | {{customerState}}, {{customerCountry}}</li>
                        <li class="text-muted"><i class="fas fa-phone"></i> {{customerPhone}}</li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <ul class="list-unstyled">
                        <li class="text-muted"><i class="fas fa-circle" style="color:#8f8061 ;"></i> <span
                            class="fw-bold">ID:</span>#123-456</li>
                        <li class="text-muted"><i class="fas fa-circle" style="color:#8f8061;"></i>
                            <span class="me-1 fw-bold">Status:</span>
                                {{#ifCond status "===" "paid"}}
                                <span class="badge bg-warning text-black fw-bold">Unpaid</span>
                                {{/ifCond}}
                                 {{#ifCond status "===" "unpaid"}}
                                <span class="badge bg-success text-black fw-bold">Paid</span>
                                {{/ifCond}}
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div class="row my-2 mx-1 justify-content-center">
                        {{#each items}}
                        <div class="col-md-2 mb-4 mb-md-0">
                            <div class="bg-image ripple rounded-5 mb-4 overflow-hidden d-block" data-ripple-color="light">
                            <img src="{{image}}" class="w-100" height="100px" alt="Elegant shoes and shirt" />
                            <a href="#!">
                                <div class="hover-overlay">
                                <div class="mask" style="background-color: hsla(0, 0%, 98.4%, 0.2)"></div>
                                </div>
                            </a>
                            </div>
                        </div>
                        <div class="col-md-7 mb-4 mb-md-0">
                            <p class="fw-bold">{{description}}</p>
                            <p class="mb-1">
                            <span class="text-muted me-2">Size:</span><span>{{detail.size}}</span>
                            </p>
                            <p>
                            <span class="text-muted me-2">Color:</span><span>{{detail.color}}</span>
                            </p>
                        </div>
                        <div class="col-md-3 mb-4 mb-md-0">
                            <h5 class="mb-2">
                            <s class="text-muted me-2 small align-middle">${{price.price0}}</s><span class="align-middle">${{price.price}}</span>
                            </h5>
                            <p class="text-danger"><small>You save {{price.save}}%</small></p>
                        </div>
                        {{/each}}

                    <hr>
                    </div>
                    <div class="row">
                        <div class="col-xl-3">
                            <ul class="list-unstyled">
                            <li class="text-muted ms-3"><span class="text-black me-4">SubTotal</span>${{subTotal}}</li>
                            <li class="text-muted ms-3 mt-2"><span class="text-black me-4">Shipping</span>${{shipping}}</li>
                            </ul>
                            <p class="text-black float-start"><span class="text-black me-3"> Total Amount</span><span
                                style="font-size: 20px;">${{total}}</span></p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </body>
</html>
```

`**.controller.ts` file:
```ts
@Get('pdf')
async generatePdf2(@Res() res) {
    const buffer = await this.appService.secondExample();
    res.set({
      // pdf
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=pdf.pdf`,
      'Content-Length': buffer.length,
      // prevent cache
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: 0,
    });
    res.end(buffer);
  }
}
```
Result
![image](https://user-images.githubusercontent.com/26281994/207534170-ad8ffd45-3385-4c3a-a579-aad5b585e1eb.png)

### More details

---

| JavaScript      | HTMLBars OP1           | HTMLBars OP2                  |
| --------------- | ---------------------- | ----------------------------- |
| `if (a === b)`  | `{{#if (eq a b)}}`     | `{{#ifCond var1 '===' var2}}` |
| `if (a !== b)`  | `{{#if (not-eq a b)}}` | `{{#ifCond var1 '!==' var2}}` |
| `if (a && b)`   | `{{#if (and a b)}}`    | `{{#ifCond var1 '&&' var2}}`  |
| `if (a > b)`    | `{{#if (gt a b)}}`     | `{{#ifCond var1 '>' var2}}`   |
| `if (a >= b)`   | `{{#if (gte a b)}}`    | `{{#ifCond var1 '>=' var2}}`  |
| `if (a < b)`    | `{{#if (lt a b)}}`     | `{{#ifCond var1 '<' var2}}`   |
| `if (a <= b)`   | `{{#if (lte a b)}}`    | `{{#ifCond var1 '<=' var2}}`  |
| `if (a && b)`   | `{{#if (and a b)}}`    | `{{#ifCond var1 '&&' var2}}`  |
| `if (a \|\| b)` | `{{#if (or a b)}}`     | `{{#ifCond var1 \|\| var2}}`  |
