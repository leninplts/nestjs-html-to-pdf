import { launch } from 'puppeteer';
import { compile, registerHelper } from 'handlebars'
const fs = require('fs-extra')

export const createPdf = async (filePath: string, options = {}, data = {}) => {
  // const filePath = '../templates/pdf-invoice.hbs'
  try {
    const browser = await launch();
    const page = await browser.newPage();

    registerHelper("ifCond", (
      v1: any, 
      operator: any, 
      v2: any, 
      options:any
    ) => {
      switch (operator) {
        case "==":
          return v1 == v2 ? options.fn(data) : options.inverse(data);
        case "===":
          return v1 === v2 ? options.fn(data) : options.inverse(data);
        case "!=":
          return v1 != v2 ? options.fn(data) : options.inverse(data);
        case "!==":
          return v1 !== v2 ? options.fn(data) : options.inverse(data);
        case "<":
          return v1 < v2 ? options.fn(data) : options.inverse(data);
        case "<=":
          return v1 <= v2 ? options.fn(data) : options.inverse(data);
        case ">":
          return v1 > v2 ? options.fn(data) : options.inverse(data);
        case ">=":
          return v1 >= v2 ? options.fn(data) : options.inverse(data);
        case "&&":
          return v1 && v2 ? options.fn(data) : options.inverse(data);
        case "||":
          return v1 || v2 ? options.fn(data) : options.inverse(data);
        default:
          return options.inverse(options);
      }
    });

    registerHelper({
      eq: (v1: any, v2: any) => v1 === v2,
      ne: (v1: any, v2: any) => v1 !== v2,
      lt: (v1: number, v2: number) => v1 < v2,
      gt: (v1: number, v2: number) => v1 > v2,
      lte: (v1: number, v2: number) => v1 <= v2,
      gte: (v1: number, v2: number) => v1 >= v2,
      and() {
          return Array.prototype.every.call(arguments, Boolean);
      },
      or() {
          return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
      }
    })

    const html = await fs.readFile(filePath, 'utf8');
    const content = compile(html)(data);
    await page.setContent(content)

    const buffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        left: '10mm',
        top: '10mm',
        right: '10mm',
        bottom: '10mm',
      },
      ...options
    });
    await browser.close()
    return buffer;
  } catch (e) {
    return e
  }
};
