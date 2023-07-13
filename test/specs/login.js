describe("Scenario Login", async () => {
  beforeEach(async () => {
    console.log("beforeEach");
    // wait for selector
  });

  afterEach(async () => {
    console.log("afterEach");
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

  it("should be able sign up successfully", async () => {
    const TabButton = await $("~Email");
    TabButton.click();

    // const classList = await $(`android.widget.EditText`);
    const classLists = await $$(`android.widget.EditText`);

    const usernameEl = classLists[0];
    const passwordEL = classLists[1];

    await usernameEl.click();
    await usernameEl.setValue("akundevelrezza@gmail.com");

    await passwordEL.click();
    await passwordEL.setValue("Bolabola2@");

    await driver.hideKeyboard();
    await $("~Next").click();
  });
});
