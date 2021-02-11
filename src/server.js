import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const express = require('express');
const MongoClient = require ('mongodb').MongoClient

const app = express();
const puppeteer = require('puppeteer');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

let browser ='';
let page = '';
let context = ''
const options = {
    path: 'captcha.png',  
    fullPage: false,
    clip: {      
      x: 290,   
      y: 275,  
      width: 175,     
      height: 70   ,
    }
  }

  app.get('/',(req,res)=>{
    res.send('Hellllloooo..!!')
  })
app.get('/openPage',async (req,resp)=>{
    browser = await puppeteer.launch({headless:false})
    context = await browser.createIncognitoBrowserContext();
    page = await context.newPage();
    await page.goto('https://upeast.railwire.co.in/rlogin');
    await page.screenshot(options);
    resp.send('done..!');
})

app.post('/loginDetails',async(req,resp)=>{
  let username = req.body.username;
  let password = req.body.password;
  let captcha = req.body.captcha;
  await page.type('#login-username',username,{delay:100});
  await page.type('#login-password',password,{delay:100})
  await page.type('#login-captcha',captcha,{delay:100})
  await page.click('#btn-login',{button:"left"})
})
const port  = 5500
app.listen(port,async ()=>{
  //const context = await browser.createIncognitoBrowserContext()
    console.log('We are live at port'+ port);
})