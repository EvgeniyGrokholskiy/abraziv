(function renderFooter() {
    let footer = document.querySelector('footer');
    footer.innerHTML = `
        <div class="footer">
            <div class="footer__left">
                <p class="footer__company_name">Общество с ограниченной<br> ответственностью<br>«МК АБРАЗИВ»</p>
                <nav>
                    <ul class="footer__nav_menu footer__nav_menu-left">
                        <li class="footer__item"><a class="footer__link" href="index.html">Главная</a></li>
                        <li class="footer__item"><a class="footer__link" href="about.html">О компании</a></li>
                    </ul>
                </nav>
            </div>
            <div class="footer__center">
                <nav>
                    <ul class="footer__nav_menu footer__nav_menu-center">
                        <li class="footer__item"><a class="footer__link" href="index.html#prod">Продукция</a></li>
                        <li class="footer__item"><a class="footer__link" href="abrasives.html">Абразивы</a></li>
                        <li class="footer__item"><a class="footer__link" href="means_of_protection.html">Средства защиты</a></li>
                        <li class="footer__item"><a class="footer__link" href="related_products.html">Сопутствующая продукция</a></li>
                        <li class="footer__item"><a class="footer__link" href="delivery.html">Доставка</a></li>
                    </ul>
                </nav>
            </div>
            <div class="footer__right">
                <div class="footer__contact_data">
                    <p class="footer__contact">Контакты</p>
                    <p class="footer__address">
                        <span class="sign">
                            <svg class="footer_svg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="16" height="21" viewBox="0 0 16 21"
                                 style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd"><path d="M7.24 1.44c3.62 0 6.55 2.93 6.55 6.55 0 2.92-2.29 5.16-3.74 7.51-1.12 1.78-2.19 3.87-2.81 6.43-.64-2.66-1.78-4.81-2.94-6.64C2.86 13 .69 10.85.69 7.99c0-3.62 2.93-6.55 6.55-6.55zm0 3.5c1.65 0 3 1.34 3 3a3 3 0 0 1-6 0c0-1.66 1.35-3 3-3z" style="fill:#fefefe"/>
                            </svg>
                        </span>
                        г. Челябинск,<br> ул. Шарова, 73. склад №5
                    </p>
                    <p class="footer__email">
                        <span class="mail-sign">
                            <svg class="footer_svg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20"
                                 height="15" viewBox="0 0 20 15"
                                 style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd"><path d="M6.8 7.5.64 2.19V12.8L6.8 7.5zm5.73.59-1.67 1.42c-.12.11-.25.19-.39.24-.15.05-.3.08-.46.08-.17 0-.32-.03-.47-.08-.14-.05-.27-.13-.39-.24h-.01L7.48 8.09l-6.13 5.27h17.3l-6.12-5.27zm.68-.59 6.15 5.3V2.19L13.21 7.5zM1.35 1.64l8.43 7.25c.03.03.06.05.1.06.04.01.08.02.13.02.04 0 .09-.01.12-.02.04-.01.07-.03.1-.05l8.43-7.26H1.35z" style="fill:#fefefe"/>
                            </svg>
                        </span>
                        <a class="footer__link" href="mailto:mk-abraziv@mail.ru">mk-abraziv@mail.ru</a>
                    </p>
                    <p class="footer__phone">
                        <span class="phone-sign">
                            <svg class="footer_svg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="17" height="19" viewBox="0 0 17 19"
                                 style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd"><path d="m5.25 6.45.29-.24c1.21-.97 1.2-2.21-.02-3.74-.47-.58-.88-.9-1.24-.95-.35-.05-.8.14-1.34.58l-.34.27c.6.38 1.07.79 1.41 1.21.65.82 1.07 1.77 1.24 2.87zm9.17 10.7.38-.3c.48-.39.73-.77.74-1.12.02-.36-.2-.82-.65-1.37-1.24-1.55-2.43-1.87-3.56-.96l-.37.29a6.414 6.414 0 0 1 3.46 3.46zm-3.47 1.35c1.05-.14 2.09-.5 3.12-1.07-.27-.55-.59-1.06-.95-1.51-.61-.76-1.46-1.4-2.55-1.92l-.16.14c-.79.62-2.12-.24-4.01-2.6-1.96-2.44-2.55-3.97-1.76-4.6l.16-.14c-.18-1.18-.57-2.16-1.2-2.93a4.98 4.98 0 0 0-1.38-1.2A9.31 9.31 0 0 0 .5 5.48c.43 1.3.98 2.56 1.66 3.79.68 1.23 1.49 2.43 2.43 3.6.96 1.19 1.97 2.26 3.03 3.2 1.05.93 2.17 1.74 3.33 2.43z" style="fill:#fefefe"/>
                            </svg>
                        </span>
                        <a class="footer__link" href="tel:+79226392020">+7 (922) 639 20 20</a>
                    </p>
                </div>
            </div>
        </div>
    `;
})();