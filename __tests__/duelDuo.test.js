const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;



beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("Does chicking draw button display choices", async() => {
    await driver.get("http://localhost:8000")
    await driver.findElement(By.id('draw')).click()

    await driver.sleep(1000)

    const displayed = await driver.wait(until.elementLocated(By.id('choices')))

    expect(await displayed.isDisplayed()).toBe(true)
  })

  test("Does clicking on 'Add to Duo' display div with id 'player-duo'", async() => {

    await driver.get("http://localhost:8000")
    await driver.findElement(By.id('draw')).click()

    await driver.sleep(1000)

    await driver.findElement(By.className('bot-btn')).click() //should only return the first one and click it

    const displayed = await driver.wait(until.elementLocated(By.id('player-duo')))

    expect(await displayed.isDisplayed()).toBe(true)

  })
});