describe("Scenario Login", async () => {
  beforeEach(async () => {
    console.log("beforeEach");
    // wait for selector
  });

  afterEach(async () => {
    const classLists = await $$(`android.widget.ImageView`);

    console.log(classLists.length, "length");
    // logout
  });

  // it("should not be able login successfully", async () => {
  //   const TabButton = await $("~Email");
  //   TabButton.click();

  //   // const classList = await $(`android.widget.EditText`);
  //   const classLists = await $$(`android.widget.EditText`);

  //   const usernameEl = classLists[0];
  //   const passwordEL = classLists[1];

  //   await usernameEl.click();
  //   await usernameEl.setValue("dummy");

  //   await passwordEL.click();
  //   await passwordEL.setValue("dummy");

  //   await driver.hideKeyboard();
  //   await $("~Next").click();

  //   expect(
  //     await $(
  //       '//android.widget.ImageView[@content-desc="Something wrong Incorrect username or password Close"]'
  //     )
  //   ).toBeExisting();
  // });

  // it("should be able sign up successfully", async () => {
  //   const TabButton = await $("~Email");
  //   TabButton.click();

  //   // const classList = await $(`android.widget.EditText`);
  //   const classLists = await $$(`android.widget.EditText`);

  //   const usernameEl = classLists[0];
  //   const passwordEL = classLists[1];

  //   await usernameEl.click();
  //   await usernameEl.setValue("akundevelrezza@gmail.com");

  //   await passwordEL.click();
  //   await passwordEL.setValue("Bolabola2@");

  //   await driver.hideKeyboard();
  //   await $("~Next").click();
  // });

  it("tes", async () => {
    let el1 = await driver.$("~Email");
    await el1.click();
    let el2 = await driver.$(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]"
    );
    await el2.click();
    await el2.setValue("akundevelrezza@gmail.com");
    await driver.longPressKeyCode(4, undefined, undefined);
    let el3 = await driver.$(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]"
    );
    await el3.click();
    await el3.setValue("Bolabola2@");
    await driver.touchAction([
      { action: "press", x: 1139, y: 586 },
      { action: "moveTo", x: 1139, y: 328 },
      "release",
    ]);
    let el4 = await driver.$("~Next");
    await el4.click();
  });
});
