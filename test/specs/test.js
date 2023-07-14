describe("Scenario testing", async () => {
  beforeEach(async () => {
    console.log("beforeEach");
    // wait for selector
  });

  afterEach(async () => {
    console.log("afterEach");
    // logout
  });

  const logout = async () => {
    let el12 = await driver.$(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.widget.ImageView[3]"
    );
    await el12.click();
    let el13 = await driver.$("~Yes");
    await el13.click();
  };

  const login = async () => {
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
  };

  const delay = (delayInms) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };

  const loginWithEmail = async () => {
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
    await driver.hideKeyboard();
    let el4 = await driver.$("~Next");
    await el4.click();
  };

  it("should be able login successfully with email", async () => {
    await loginWithEmail();
    await logout();
  });

  it("should be able login successfully with phone", async () => {});

  it("should Create dine in order ", async () => {
    await loginWithEmail();
    await delay(10000);
    let el2 = await driver.$("~Choose Table");
    await el2.click();
    let el3 = await driver.$("~I-02\nChoose");
    await el3.click();
    let el4 = await driver.$("~Next");
    await el4.click();

    await logout();
  });

  it("should be able to Create take away order ", async () => {});
  it("should be able to Create walk in order ", async () => {});
  it("should be able to Select products in the catalog ", async () => {});
  it("should be able to Check out ", async () => {});

  it("should order with Payment - Cash", async () => {
    await loginWithEmail();
    await delay(10000);

    let el2 = await driver.$("~Choose Table");
    await el2.click();
    let el3 = await driver.$("~I-03\nChoose");
    await el3.click();
    let el4 = await driver.$("~Next");
    await el4.click();
    let el5 = await driver.$("~Chamomile");
    await el5.click();
    let el6 = await driver.$("~+");
    await el6.click();
    let el7 = await driver.$(
      '//android.view.View[@content-desc="Chamomile\n2\nNotes"]/android.widget.EditText'
    );
    await el7.click();
    await el7.setValue("cold");
    await driver.longPressKeyCode(4, undefined, undefined);
    let el8 = await driver.$("~Checkout");
    await el8.click();
    let el9 = await driver.$("~Cash");
    await el9.click();
    let el10 = await driver.$("~Pay $21.00");
    await el10.click();
    let el11 = await driver.$("~Go to Homepage");
    await el11.click();

    await logout();
  });

  it("should order with Payment - Card payment Tyro ", async () => {});
  it("should order with Payment - Card payment Linkly", async () => {});

  it("should order with Payment - Split payment", async () => {});

  it("should be Adding a new customer ", async () => {});
});
