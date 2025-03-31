class MyAbTest {
  static init() {
    const candidate = this.getCookie();
    let variant = 'A';
    if (candidate) {
      variant = candidate;
    } else {
      variant = this.randomVariant();
      this.setCookie(variant);
    }
    this.setVariant(variant);
    this.armClearCookieButton();
    this.armBigBox();
  }
  static armClearCookieButton() {
    const that = this;
    this.onClick('my-clear-cookies', function() {
      that.deleteCookie();
    });
  }
  static armBigBox() {
    const that = this;
    this.onClick('my-big-box', function() {
      const divStr = '<div>Vous avez cliqué sur le bloc.</div>';
      document.getElementsByTagName('body')[0].innerHTML += divStr;
      // Not sure why this is needed, but otherwise, the event fires only once.
      that.armBigBox();
    });
  }
  static onClick(className, callback) {
    Array.prototype.forEach.call(
      document.getElementsByClassName(className),
      function(element) {
        element.onclick = callback;
      },
    );
  }
  static addDaysToCurrentDate(days = 30) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toUTCString();
  }
  static randomVariant() {
    return Math.random() < 0.5 ? 'A' : 'B';
  }
  static getCookie() {
    const name = 'myAbTest';
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }
  static deleteCookie() {
    document.cookie = `myAbTest=deleting;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  }
  static setCookie(variant, days = 30) {
    const expires = this.addDaysToCurrentDate(days);
    document.cookie = `myAbTest=${variant};expires=${expires};path=/`;
  }
  static setVariant(variant = 'A') {
    document.body.classList.remove('my-variant-a');
    document.body.classList.remove('my-variant-b');
    document.body.classList.add('my-variant-' + variant);
    document.getElementsByClassName("my-variant-name")[0].innerHTML = variant;
  }
}
