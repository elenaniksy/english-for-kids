(() => {
  'use strict';
  var e = {
      373: (e, t, n) => {
        n.r(t);
      },
      752: function (e, t, n) {
        var i =
          (this && this.__awaiter) ||
          function (e, t, n, i) {
            return new (n || (n = Promise))(function (s, a) {
              function r(e) {
                try {
                  d(i.next(e));
                } catch (e) {
                  a(e);
                }
              }
              function o(e) {
                try {
                  d(i.throw(e));
                } catch (e) {
                  a(e);
                }
              }
              function d(e) {
                var t;
                e.done
                  ? s(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(r, o);
              }
              d((i = i.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.App = void 0);
        const s = n(403),
          a = n(977),
          r = n(748),
          o = 'train';
        class d extends s.BaseComponent {
          constructor(e) {
            super(e, 'div', ['app__container']),
              (this.parentNode = e),
              (this.mode = o),
              (this.header = null),
              (this.mainContainer = null),
              (this.state = []),
              this.init();
          }
          init() {
            return i(this, void 0, void 0, function* () {
              this.element.innerHTML = '';
              const e = (yield fetch('/api/categories')).json();
              return (
                (this.state = yield e),
                (this.header = new a.Header(
                  this.element,
                  this.state,
                  this.mode
                )),
                (this.header.element.onchange = (e) => {
                  var t, n, i, s, a, r;
                  'switcher' === e.target.id &&
                    (e.target.checked
                      ? ((this.mode = o),
                        null === (t = this.header) ||
                          void 0 === t ||
                          t.setMode(this.mode),
                        null === (n = this.header) ||
                          void 0 === n ||
                          n.changeSwitcher(),
                        null === (i = this.mainContainer) ||
                          void 0 === i ||
                          i.changeMode(this.mode))
                      : ((this.mode = 'play'),
                        null === (s = this.header) ||
                          void 0 === s ||
                          s.setMode(this.mode),
                        null === (a = this.header) ||
                          void 0 === a ||
                          a.changeSwitcher(),
                        null === (r = this.mainContainer) ||
                          void 0 === r ||
                          r.changeMode(this.mode)));
                }),
                yield this.renderMainContainer(
                  this.element,
                  this.state,
                  this.mode
                ),
                e
              );
            });
          }
          renderMainContainer(e, t, n) {
            this.mainContainer = new r.MainContainer(e, t, n);
          }
          renderCards(e) {
            this.mainContainer && this.mainContainer.renderCardsByCategory(e);
          }
        }
        t.App = d;
      },
      403: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.BaseComponent = void 0),
          (t.BaseComponent = class {
            constructor(e = null, t = 'div', n = [], i = '') {
              (this.element = document.createElement(t)),
                this.element.classList.add(...n),
                (this.element.innerHTML = `${i}`),
                e && e.append(this.element);
            }
            destroy() {
              this.element.remove();
            }
            addClass(e) {
              this.element.classList.add(e);
            }
            removeClass(e) {
              this.element.classList.remove(e);
            }
            changeClassMode(e) {
              'train' === e &&
                (this.removeClass('red'), this.addClass('green')),
                'play' === e &&
                  (this.removeClass('green'), this.addClass('red'));
            }
          });
      },
      343: function (e, t, n) {
        var i =
          (this && this.__awaiter) ||
          function (e, t, n, i) {
            return new (n || (n = Promise))(function (s, a) {
              function r(e) {
                try {
                  d(i.next(e));
                } catch (e) {
                  a(e);
                }
              }
              function o(e) {
                try {
                  d(i.throw(e));
                } catch (e) {
                  a(e);
                }
              }
              function d(e) {
                var t;
                e.done
                  ? s(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(r, o);
              }
              d((i = i.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Card = void 0);
        const s = n(403);
        n(453);
        const a = n(851),
          r = 'flipped';
        class o extends s.BaseComponent {
          constructor(e) {
            super(e, 'div', ['card__container']),
              (this.parentNode = e),
              (this.cardHolder = document.createElement('div')),
              this.cardHolder.classList.add('card'),
              (this.buttonDelete = new s.BaseComponent(
                this.cardHolder,
                'button',
                ['button__delete'],
                '❌'
              )),
              (this.buttonDelete.element.onclick = () => {
                this.deleteCategory(), this.destroy();
              }),
              (this.buttonEdit = new s.BaseComponent(
                this.cardHolder,
                'button',
                ['button__edit'],
                '🖊️'
              )),
              (this.formOpen = !1),
              (this.cardId = ''),
              (this.buttonEdit.element.onclick = () => {
                var e;
                this.formOpen
                  ? (null === (e = this.cardForm) ||
                      void 0 === e ||
                      e.destroy(),
                    (this.formOpen = !1))
                  : ((this.formOpen = !0),
                    (this.cardForm = new a.CardForm(
                      this.cardHolder,
                      this.cardId
                    )),
                    this.cardForm.init());
              }),
              this.cardHolder.append(this.buttonDelete.element),
              (this.cardFront = document.createElement('div')),
              this.cardFront.classList.add('card__front'),
              (this.image = document.createElement('img')),
              this.image.classList.add('card__image'),
              (this.header = new s.BaseComponent(this.cardHolder, 'h3', [
                'card__header',
              ])),
              (this.cardButton = new s.BaseComponent(
                this.cardHolder,
                'button',
                ['card__button']
              )),
              (this.audio = new Audio()),
              (this.cardBack = document.createElement('div')),
              this.cardBack.classList.add('card__back');
          }
          renderCategory(e, t) {
            var n;
            (this.cardId = e.category),
              this.cardHolder.classList.add('column'),
              (this.header.element.innerHTML = `${e.category}`),
              (this.cardButton.element.innerHTML = 'Select'),
              (this.cardButton.element.id = `${e.category}`),
              e.items &&
              0 !== (null === (n = e.items) || void 0 === n ? void 0 : n.length)
                ? ((this.image.src = `${e.items[0].image}`),
                  this.cardHolder.append(this.image))
                : ((this.image.src = 'src/assets/noImage.png'),
                  this.cardHolder.append(this.image)),
              this.cardButton.changeClassMode(t),
              this.cardHolder.append(this.cardButton.element),
              this.element.append(this.cardHolder);
          }
          renderItem(e, t) {
            return (
              'train' === t &&
                (this.renderFrontSide(e, t),
                this.cardFront.append(this.image, this.header.element),
                this.cardHolder.append(this.cardFront, this.cardBack),
                this.element.append(this.cardHolder),
                (this.image.onclick = () => {
                  (this.audio.src = `${e.audioSrc}`),
                    (this.audio.currentTime = 0),
                    this.audio.play();
                })),
              'play' === t &&
                (this.renderPlayCardMode(e, t),
                (this.cardHolder.id = e.word),
                this.cardHolder.append(this.image, this.cardButton.element),
                this.element.append(this.cardHolder)),
              this.cardHolder
            );
          }
          renderFrontSide(e, t) {
            (this.image.src = `${e.image}`),
              (this.header.element.innerHTML = `${e.word}`),
              this.cardButton.removeClass('card__button'),
              this.cardButton.addClass('card__button_flip'),
              (this.cardButton.element.innerHTML = '🔄'),
              this.cardButton.changeClassMode(t),
              (this.cardButton.element.onclick = () => {
                this.addClass(r),
                  this.renderBackSide(e),
                  setTimeout(() => {
                    this.removeClass(r);
                  }, 5e3);
              }),
              this.cardFront.append(
                this.header.element,
                this.image,
                this.cardButton.element
              );
          }
          renderBackSide(e) {
            this.cardBack.innerHTML = '';
            const t = document.createElement('img');
            (t.src = `${e.image}`), t.classList.add('card__image');
            const n = document.createElement('h3');
            (n.innerHTML = `${e.translation}`), this.cardBack.append(t, n);
          }
          renderPlayCardMode(e, t) {
            (this.image.src = `${e.image}`),
              this.image.classList.add('card__image'),
              (this.image.style.pointerEvents = 'none');
          }
          renderCreateCard() {
            return (
              this.header.destroy(),
              this.cardButton.destroy(),
              this.buttonDelete.destroy(),
              this.buttonEdit.destroy(),
              this.cardHolder.classList.add('card__create'),
              this.element.append(this.cardHolder),
              this.cardHolder
            );
          }
          deleteCategory() {
            return i(this, void 0, void 0, function* () {
              yield fetch(`/api/categories/${this.cardButton.element.id}`, {
                method: 'DELETE',
              }).then((e) => {
                console.log('Request DELETE complete! response:', e);
              });
            });
          }
        }
        t.Card = o;
      },
      851: function (e, t, n) {
        var i =
          (this && this.__awaiter) ||
          function (e, t, n, i) {
            return new (n || (n = Promise))(function (s, a) {
              function r(e) {
                try {
                  d(i.next(e));
                } catch (e) {
                  a(e);
                }
              }
              function o(e) {
                try {
                  d(i.throw(e));
                } catch (e) {
                  a(e);
                }
              }
              function d(e) {
                var t;
                e.done
                  ? s(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(r, o);
              }
              d((i = i.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.CardForm = void 0);
        const s = n(403);
        class a extends s.BaseComponent {
          constructor(e, t) {
            super(e, 'form', ['card__form']),
              (this.parentNode = e),
              (this.element.method = 'POST'),
              (this.formLine = document.createElement('div')),
              this.formLine.classList.add('form__line'),
              (this.inputText = document.createElement('input')),
              (this.inputButton = document.createElement('input')),
              this.inputText.classList.add('input__text'),
              this.inputButton.classList.add('input__button'),
              this.formLine.append(this.inputText, this.inputButton),
              (this.name = ''),
              (this.inputText.onchange = (e) => {
                this.name = e.target.value;
              }),
              (this.inputButton.onclick = () => {
                '' !== this.name && this.changeCategory(t, this.name),
                  (this.parentNode.children[2].innerHTML = this.name),
                  this.destroy();
              });
          }
          init() {
            (this.inputText.required = !0),
              (this.inputText.type = 'text'),
              (this.inputText.placeholder = 'Enter text...'),
              (this.inputText.required = !0),
              (this.inputButton.type = 'submit'),
              (this.inputButton.value = '✔'),
              this.element.append(this.formLine);
          }
          changeCategory(e, t) {
            return i(this, void 0, void 0, function* () {
              return (
                fetch(`/api/categories/${e}`, {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ category: t }),
                }).then((e) => {
                  console.log('Request CREATE complete! response:', e);
                }),
                yield this.getNewName(),
                t
              );
            });
          }
          getNewName() {
            return this.name;
          }
        }
        t.CardForm = a;
      },
      977: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Header = void 0);
        const i = n(403),
          s = n(658),
          a = n(709);
        class r extends i.BaseComponent {
          constructor(e, t, n) {
            super(e, 'header', ['header']),
              (this.parentNode = e),
              (this.mode = n),
              (this.navigation = new s.Navigation(this.element, t, this.mode)),
              (this.switcher = new a.Switcher(this.element, this.mode));
          }
          getMode() {
            return this.mode;
          }
          setMode(e) {
            this.mode = e;
          }
          changeSwitcher() {
            this.switcher.changeClassMode(this.mode),
              this.navigation.changeMenuColor(this.mode);
          }
        }
        t.Header = r;
      },
      565: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.MenuToggle = void 0);
        const i = n(403),
          s = n(991);
        class a extends i.BaseComponent {
          constructor(e, t, n) {
            super(e, 'div', ['menu-toggle']),
              (this.parentNode = e),
              (this.input = document.createElement('input')),
              (this.input.id = 'menu__toggle'),
              (this.input.type = 'checkbox'),
              (this.label = document.createElement('label')),
              this.label.classList.add('menu__btn'),
              (this.label.htmlFor = 'menu__toggle'),
              (this.label.innerHTML = '<span></span>'),
              this.render([this.input, this.label]),
              (this.navigationList = new s.NavigationList(this.element, t, n));
          }
          render(e = []) {
            this.element.append(...e);
          }
          changeColor(e) {
            this.navigationList.changeClassMode(e);
          }
        }
        t.MenuToggle = a;
      },
      658: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Navigation = void 0);
        const i = n(403),
          s = n(565);
        class a extends i.BaseComponent {
          constructor(e, t, n) {
            super(e, 'nav', ['navigation']),
              (this.parentNode = e),
              (this.menuToggle = new s.MenuToggle(this.element, t, n));
          }
          changeMenuColor(e) {
            this.menuToggle.changeColor(e);
          }
        }
        t.Navigation = a;
      },
      81: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.NavigationItem = void 0);
        const i = n(403);
        class s extends i.BaseComponent {
          constructor(e, t) {
            super(e, 'li', ['navigation__item']),
              (this.parentNode = e),
              (this.innerLink = new i.BaseComponent(
                this.element,
                'a',
                ['navigation__link'],
                t
              )),
              (this.innerLink.element.href = `#${t}`);
          }
        }
        t.NavigationItem = s;
      },
      991: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.NavigationList = void 0);
        const i = n(403),
          s = n(81);
        class a extends i.BaseComponent {
          constructor(e, t, n) {
            super(e, 'ul', ['navigation__list']),
              (this.parentNode = e),
              (this.mode = n),
              (this.state = t),
              this.renderList();
          }
          renderList() {
            this.changeClassMode(this.mode),
              this.state.forEach((e) => {
                const t = new s.NavigationItem(this.element, e.category);
                this.element.append(t.element);
              });
          }
        }
        t.NavigationList = a;
      },
      709: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Switcher = void 0);
        const i = n(403);
        class s extends i.BaseComponent {
          constructor(e, t) {
            super(e, 'div', ['switch-button']),
              (this.parentNode = e),
              (this.mode = t),
              (this.input = document.createElement('input')),
              (this.input.type = 'checkbox'),
              (this.input.id = 'switcher'),
              this.input.classList.add('switch-button-checkbox'),
              (this.label = document.createElement('label')),
              this.label.classList.add('switch-button-label'),
              (this.label.htmlFor = ''),
              (this.span = document.createElement('span')),
              this.span.classList.add('switch-button-label-span'),
              (this.span.innerHTML = 'Train'),
              this.label.append(this.span),
              this.render(this.mode);
          }
          render(e) {
            'train' === e && (this.input.checked = !0),
              'play' === e && (this.input.checked = !1),
              this.changeClassMode(e),
              this.element.append(this.input, this.label);
          }
        }
        t.Switcher = s;
      },
      64: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.CardField = void 0);
        const i = n(403),
          s = n(343),
          a = n(253);
        class r extends i.BaseComponent {
          constructor(e) {
            super(e, 'div', ['cards-field']),
              (this.parentNode = e),
              (this.cards = []),
              (this.cardsHtmlElements = []),
              (this.buttonStart = new i.BaseComponent(
                this.element,
                'button',
                ['button__start'],
                'Start game'
              )),
              (this.overlay = new a.Overlay(this.element)),
              (this.audio = new Audio()),
              (this.audio.currentTime = 0),
              (this.activeItem = null),
              (this.index = 0),
              (this.errors = 0),
              (this.answers = 0),
              (this.cardsHtmlElements = []),
              (this.score = new i.BaseComponent(this.element, 'div', [
                'score',
              ])),
              (this.buttonStart.element.onclick = () => {
                this.newGame();
              });
          }
          clear() {
            (this.cards = []), (this.element.innerHTML = '');
          }
          addCardsCategory(e, t) {
            this.element.before(this.overlay.element),
              this.removeClass('column__center'),
              (this.cards = e),
              this.cards.forEach((e) => {
                new s.Card(this.element).renderCategory(e, t);
              }),
              (new s.Card(this.element).renderCreateCard().onclick = () => {
                this.overlay.removeClass('overlay_hidden');
              });
          }
          addCardsItems(e, t, n) {
            this.clear(),
              (this.cards = e),
              this.cards.forEach((e) => {
                e.category === n &&
                  e.items &&
                  ((this.cardsItems = e.items),
                  e.items.forEach((e) => {
                    const n = new s.Card(this.element).renderItem(e, t);
                    this.cardsHtmlElements.push(n);
                  }));
              }),
              new s.Card(this.element).renderCreateCard(),
              'play' === t &&
                (this.element.append(this.buttonStart.element),
                this.buttonStart.changeClassMode(t));
          }
          newGame() {
            this.buttonStart.destroy(), this.element.append(this.score.element);
            const e = new i.BaseComponent(
              this.element,
              'button',
              ['button__start', 'red'],
              'Repeat'
            );
            (e.element.onclick = () => {
              this.activeItem && this.playSound(this.activeItem.audioSrc);
            }),
              this.element.append(e.element),
              this.sortPlayItems(),
              this.getPlayElement();
          }
          getPlayElement() {
            this.cardsItems &&
              (this.index === this.cardsItems.length && this.renderEndGame(),
              (this.activeItem = this.cardsItems[this.index]),
              this.playSound(this.activeItem.audioSrc),
              this.cardsHtmlElements.forEach((e) => {
                e.onclick = () => {
                  this.playCardsHandler(e.id);
                };
              }));
          }
          playCardsHandler(e) {
            if (!this.activeItem)
              throw Error(`active item is not defined: ${this.activeItem}`);
            e === this.activeItem.word
              ? ((this.answers += 1),
                this.score.element.append('⭐'),
                (this.index += 1),
                this.getPlayElement())
              : ((this.errors += 1), this.score.element.append('⭕'));
          }
          playSound(e) {
            (this.audio.src = e), this.audio.play();
          }
          sortPlayItems() {
            this.cardsItems &&
              this.cardsItems.sort(() => Math.round(100 * Math.random() - 50));
          }
          renderEndGame() {
            (this.element.innerHTML = ''), this.addClass('column__center');
            const e = new i.BaseComponent(this.element, 'h1', [
                'header__final',
              ]),
              t = document.createElement('img');
            t.classList.add('img__final'), (t.src = '');
            const n = new i.BaseComponent(
              this.element,
              'button',
              ['button__restart'],
              'Try again!'
            );
            (n.element.onclick = () => {
              this.restartGame();
            }),
              0 === this.errors
                ? ((e.element.innerHTML = ''),
                  (e.element.innerHTML = `You Win! Answers: ${this.answers}. Errors: ${this.errors}`),
                  (t.src = './img/win.jpg'),
                  this.element.append(e.element, t))
                : ((e.element.innerHTML = ''),
                  (e.element.innerHTML = `You lose! Answers: ${this.answers}. Errors: ${this.errors}`),
                  (t.src = './img/lose.jpg'),
                  this.element.append(e.element, t)),
              this.element.append(n.element);
          }
          restartGame() {
            (this.element.innerHTML = ''),
              this.removeClass('column__center'),
              (this.score.element.innerHTML = ''),
              (this.errors = 0),
              (this.index = 0),
              (this.answers = 0),
              (this.activeItem = null),
              (this.audio.src = ''),
              this.addCardsCategory(this.cards, 'play');
          }
        }
        t.CardField = r;
      },
      748: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.MainContainer = void 0);
        const i = n(403),
          s = n(64);
        class a extends i.BaseComponent {
          constructor(e, t, n) {
            super(e, 'div', ['main-container']),
              (this.parentNode = e),
              (this.mode = n),
              (this.state = t),
              (this.cardField = new s.CardField(this.element)),
              this.renderStartCategory(),
              (this.element.onclick = (e) => {
                this.handlerClick(e);
              });
          }
          renderStartCategory() {
            this.cardField.clear(),
              this.cardField.addCardsCategory(this.state, this.mode);
          }
          changeMode(e) {
            (this.mode = e), this.renderStartCategory();
          }
          handlerClick(e) {
            if ('card__button' === e.target.className.split(' ')[0]) {
              const t = e.target.id;
              this.cardField.clear(),
                this.cardField.addCardsItems(this.state, this.mode, t);
            }
          }
          renderCardsByCategory(e) {
            this.state.forEach((t) => {
              t.category === e &&
                this.cardField.addCardsItems(this.state, this.mode, e);
            });
          }
        }
        t.MainContainer = a;
      },
      189: function (e, t, n) {
        var i =
          (this && this.__awaiter) ||
          function (e, t, n, i) {
            return new (n || (n = Promise))(function (s, a) {
              function r(e) {
                try {
                  d(i.next(e));
                } catch (e) {
                  a(e);
                }
              }
              function o(e) {
                try {
                  d(i.throw(e));
                } catch (e) {
                  a(e);
                }
              }
              function d(e) {
                var t;
                e.done
                  ? s(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(r, o);
              }
              d((i = i.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Modal = void 0);
        const s = n(403);
        class a extends s.BaseComponent {
          constructor(e) {
            super(e, 'div', ['modal']),
              (this.parentNode = e),
              (this.header = new s.BaseComponent(
                this.element,
                'h2',
                ['modal__header'],
                'Your Category'
              )),
              (this.form = new s.BaseComponent(this.element, 'form', ['form'])),
              (this.nameInput = new s.BaseComponent(this.element, 'input', [
                'modal__input',
              ])),
              (this.data = { category: '' }),
              (this.nameInput.element.oninput = (e) => {
                this.data.category = e.target.value;
              }),
              (this.buttonSave = new s.BaseComponent(
                this.element,
                'input',
                ['button__save'],
                'Send'
              )),
              (this.buttonSave.element.onclick = () => {
                this.createNewCategory();
              }),
              this.renderModal();
          }
          renderModal() {
            (this.form.element.method = 'POST'),
              (this.nameInput.element.type = 'text'),
              (this.nameInput.element.placeholder = 'Enter your category name'),
              (this.nameInput.element.required = !0),
              (this.buttonSave.element.type = 'submit'),
              this.form.element.append(
                this.nameInput.element,
                this.buttonSave.element
              ),
              this.element.append(this.header.element, this.form.element);
          }
          createNewCategory() {
            return i(this, void 0, void 0, function* () {
              '' !== this.data.category &&
                (yield fetch('/api/categories/', {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(this.data),
                }).then((e) => {
                  console.log('Request CREATE complete! response:', e);
                }));
            });
          }
        }
        t.Modal = a;
      },
      253: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Overlay = void 0);
        const i = n(403),
          s = n(189);
        class a extends i.BaseComponent {
          constructor(e) {
            super(e, 'div', ['overlay', 'overlay_hidden']),
              (this.parentNode = e),
              (this.modal = new s.Modal(this.element)),
              (this.buttonClose = new i.BaseComponent(
                this.element,
                'button',
                ['button__close'],
                '✖'
              )),
              (this.buttonClose.element.onclick = () => {
                this.element.classList.contains('overlay_hidden') ||
                  this.addClass('overlay_hidden');
              });
          }
        }
        t.Overlay = a;
      },
      607: function (e, t, n) {
        var i =
          (this && this.__awaiter) ||
          function (e, t, n, i) {
            return new (n || (n = Promise))(function (s, a) {
              function r(e) {
                try {
                  d(i.next(e));
                } catch (e) {
                  a(e);
                }
              }
              function o(e) {
                try {
                  d(i.throw(e));
                } catch (e) {
                  a(e);
                }
              }
              function d(e) {
                var t;
                e.done
                  ? s(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(r, o);
              }
              d((i = i.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, '__esModule', { value: !0 }), n(373);
        const s = n(752),
          a = n(458),
          r = [];
        !(function () {
          i(this, void 0, void 0, function* () {
            const e = (yield fetch('/api/categories')).json();
            yield e.then((e) => {
              e.forEach((e) => {
                r.push(e.category.toLowerCase());
              });
            });
          });
        })(),
          (window.onload = () => {
            if (!document.getElementById('app'))
              throw Error('Application root element not found');
            const e = new s.App(document.body),
              t = new a.Router({ mode: 'hash', root: '/' });
            r.forEach((n) => {
              t.add(`#${n}`, () => {
                e.renderCards(n);
              });
            });
          });
      },
      458: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Router = void 0),
          (t.Router = class {
            constructor(e) {
              (this.routes = []),
                (this.mode = null),
                (this.root = '/'),
                (this.mode = 'hash'),
                e.mode && (this.mode = e.mode),
                e.root && (this.root = e.root),
                (window.onpopstate = () => {
                  this.navigate();
                });
            }
            add(e, t) {
              return this.routes.push({ path: e, handler: t }), this;
            }
            navigate() {
              const e = this.routes.find(
                (e) => e.path === window.location.hash
              );
              if (!e) throw new Error('error route: there is no such route');
              return e.handler(), this;
            }
          });
      },
      453: (e, t, n) => {
        e.exports = n.p + 'src/assets//noImage.png';
      },
    },
    t = {};
  function n(i) {
    var s = t[i];
    if (void 0 !== s) return s.exports;
    var a = (t[i] = { exports: {} });
    return e[i].call(a.exports, a, a.exports, n), a.exports;
  }
  (n.g = (function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (e) {
      if ('object' == typeof window) return window;
    }
  })()),
    (n.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + '');
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var i = t.getElementsByTagName('script');
        i.length && (e = i[i.length - 1].src);
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (n.p = e);
    })(),
    n(607);
})();
