(function renderHeader() {

    const rootDomElement = document.querySelector("header");

    rootDomElement.innerHTML = `  
    
     <div class="header">
            <div class="logo">
                <svg class="logo__svg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="329" height="71" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd" viewBox="0 0 83.42 17.94"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="6.1" y1="7.59" x2="14.68" y2="17.81"><stop offset="0" style="stop-opacity:1;stop-color:#59b99d"/><stop offset="1" style="stop-opacity:1;stop-color:#fefefe"/></linearGradient></defs><path style="fill:#59b99d" d="M1.09 13.73 8.48 1.01 8.6.77l.13-.2.11-.17.12-.15.13-.11.12-.07.06-.03.06-.03.06-.01H9.51l.07.01.06.03.05.03.13.07.12.11.13.15.12.17.13.2.11.24 8.96 15.36.05.13.06.12.04.13.03.12.03.11.01.13.01.11-.01.11-.01.11-.03.1-.06.08-.05.08-.07.07-.09.07-.11.05-.11.05h-4.97l-.18-.02-.18-.03-.17-.04-.17-.05-.16-.06-.17-.08-.15-.08-.17-.1-.15-.1-.15-.11-.15-.12-.15-.13-.29-.26-.3-.29-.56-.59-.57-.63-.29-.3-.29-.29-.29-.26-.29-.25-.19-.13-.18-.11-.09-.04-.08-.03-.1-.04-.09-.01-.1-.03h-.13l-.12-.01-.15.01-.36.03-.46.05-.25.03-.2.01h-.09l-.07-.01-.05-.01-.04-.02-.03-.03-.01-.04v-.05l.01-.06.05-.16.13-.21.11-.18.11-.18.11-.18.11-.18.17-.23.16-.23.18-.18.2-.15.09-.07.1-.05.1-.06.11-.04.09-.04.12-.03.11-.03.11-.01.22-.01.22.01.23.04.24.07.23.1.24.12.25.15.25.18.2.2.21.19.2.21.19.22.39.43.38.44.2.21.2.21.2.2.22.2.22.18.22.16.25.17.25.14.14.07.14.04.14.04.15.04.29.04.3.02h.31l.3-.02.3-.01h.31l-5.63-9.64-.08-.17-.09-.13-.08-.13-.08-.1-.08-.09-.09-.1-.08-.07-.08-.05-.09-.05-.08-.04-.07-.02-.08-.02-.08-.01h-.07l-.09.01-.07.02-.13.05-.14.07-.14.1-.12.11-.13.12-.11.13-.11.13-.1.13-.43.73-.42.73-.43.72-.42.72-.41.69-.4.71-.42.69-.4.69-.42.69-.4.7-.41.7-.42.71-.41.7-.42.72-.42.73-.45.74-.09.18-.1.16-.11.15-.11.11-.06.06-.05.03-.07.03h-.06l-.07-.02-.07-.03-.06-.05-.07-.07-.21-.28-.18-.25-.14-.23-.11-.22-.04-.1-.03-.11-.01-.1-.02-.11-.01-.09v-.1l.01-.11.02-.1.05-.22.09-.21.09-.23.14-.25.31-.55z"/><path d="M1.09 13.73 8.48 1.01 8.6.77l.13-.2.11-.17.12-.15.13-.11.12-.07.05-.03.07-.03.06-.01H9.51l.07.01.06.03.05.03.13.07.12.11.13.15.12.17.13.2.11.24 3.68 6.31c-.32.88-.7 1.73-1.14 2.55l-2.35-4.02-.08-.17-.08-.14-.09-.12-.08-.1-.08-.09-.09-.1-.08-.07-.08-.05-.09-.05-.08-.04-.07-.02-.08-.02-.08-.01h-.07l-.09.01-.07.02-.13.05-.14.07-.14.1-.12.11-.13.12-.11.13-.11.13-.1.13-.43.73-.42.73-.43.72-.42.72-.41.69-.4.71-.42.69-.4.69-.42.69-.4.7-.41.7-.42.71-.41.7-.42.72-.42.73-.45.74-.09.18-.1.16-.11.15-.11.11-.06.06-.05.03-.07.03h-.06l-.07-.02-.07-.03-.06-.05-.07-.07-.21-.28-.18-.25-.14-.23-.11-.22-.04-.1-.03-.11-.01-.1-.02-.11-.01-.09v-.1l.01-.11.02-.1.05-.22.09-.21.09-.23.14-.25.31-.55.38-.67zm8.47.66-.28-.24-.19-.13-.18-.11-.09-.04-.08-.03-.1-.04-.09-.01-.1-.03h-.12l-.13-.01-.15.01-.36.03-.46.05-.25.03-.2.01h-.09l-.07-.01-.05-.01-.04-.02-.03-.03-.01-.04v-.05l.01-.06.06-.16.12-.21.11-.18.11-.18.11-.18.11-.18.17-.23.16-.23.18-.18.2-.15.09-.07.1-.05.1-.06.11-.04.1-.04.11-.03.11-.03.11-.01.22-.01.22.01.23.04.24.07.23.1.24.12.25.15.25.18.21.2.2.19.16.17c-.48.6-1 1.17-1.55 1.72z" style="fill:url(#a)"/><path d="M28.82 12.06h-1.7v-4.5l-1.23 2.91h-1.16L23.5 7.56v4.5h-1.61V5.27h1.96l1.5 3.36 1.51-3.36h1.96v6.79zm7.38 0h-2.03l-1.81-2.74h-.43v2.74h-1.71V5.27h1.71v2.76l.18-.01.17-.04.13-.04.12-.07.09-.11.13-.15.11-.2.14-.25.08-.18.1-.19.09-.21.08-.18.09-.15.08-.14.08-.12.09-.11.09-.11.1-.09.1-.08.09-.07.11-.07.13-.05.12-.04.14-.03.15-.04.16-.02.15-.01h.55l.13.01h.11v1.45h-.4l-.14.02-.13.03-.12.05-.11.08-.11.12-.11.15-.11.2-.12.25-.08.2-.09.18-.09.14-.07.12-.08.11-.07.08-.08.06-.07.05 2.36 3.49zm2.56 0 2.3-6.79h1.86l2.3 6.79h-1.76l-.42-1.37h-2.15l-.43 1.37h-1.7zm3.9-2.61-.7-2.26-.69 2.26h1.39zm8.67.44-.01.25-.03.23-.07.22-.08.21-.1.21-.12.18-.14.16-.15.14-.21.14-.21.12-.21.1-.22.08-.25.06-.26.04-.29.03H45.88V5.27h4.94v1.3h-3.24v1.26H49l.29.01.26.03.25.04.11.03.12.03.11.04.11.04.11.05.1.07.1.06.11.07.08.08.07.07.08.08.06.09.07.08.05.1.04.09.05.1.07.21.05.22.03.23.01.24zm-1.75.05-.02-.16-.01-.16-.03-.08-.04-.07-.04-.07-.06-.05-.07-.07-.08-.04-.08-.06-.11-.03-.11-.04-.14-.01-.17-.01-.18-.02h-.86v1.73h1l.11-.01.13-.02.09-.03.11-.02.09-.04.09-.05.07-.05.07-.06.07-.07.06-.06.04-.09.02-.08.03-.08.02-.1v-.1zm7.93-2.53-.01.24-.03.23-.04.22-.07.23-.08.19-.1.19-.12.17-.13.15-.18.18-.2.15-.11.07-.12.07-.11.07-.12.05-.12.05-.14.04-.14.04-.14.03-.15.02-.17.03h-.16l-.18.02h-.9v2.21h-1.7V5.27h2.64l.27.01.27.02.25.04.22.04.21.07.19.07.19.09.18.12.1.06.08.07.08.07.07.09.09.09.05.09.07.11.06.09.04.11.04.11.04.13.03.12.03.13.01.14.01.13v.14zm-1.75.04-.02-.13-.02-.13-.05-.11-.05-.11-.07-.1-.08-.08-.09-.06-.09-.05-.11-.04-.13-.04-.11-.03-.11-.02h-.26l-.15-.01h-.43v2.03h.47l.11-.01h.19l.18-.03.14-.03.15-.05.13-.07.11-.08.07-.09.07-.08.05-.1.04-.08.02-.1.02-.12.02-.12v-.16zm1.93 4.61 2.3-6.79h1.85l2.3 6.79h-1.76l-.41-1.37h-2.16l-.42 1.37h-1.7zm3.9-2.61-.7-2.26-.69 2.26h1.39zm7.61-.61.11.11.1.11.08.14.07.13.07.16.04.16.03.18v.21l-.02.23-.02.24-.03.11-.04.11-.04.11-.05.1-.05.1-.06.09-.05.1-.09.08-.15.17-.18.14-.2.13-.24.13-.25.1-.26.06-.29.07-.32.05-.33.02-.35.02-.33-.02-.32-.01-.32-.04-.3-.06-.29-.05-.29-.09-.26-.08-.27-.1v-1.52h.16l.19.11.21.13.23.11.26.11.28.1.28.07.27.04.27.01h.16l.17-.01.14-.02.15-.02.12-.05.13-.04.11-.04.11-.07.1-.05.08-.09.07-.08.05-.08.05-.1.02-.11.03-.11V9.8l-.01-.09-.03-.1-.03-.08-.04-.08-.06-.07-.05-.06-.07-.05-.08-.06-.1-.04-.11-.04-.12-.03-.14-.03-.15-.01-.18-.02h-1.15V7.83h1.21l.13-.02.12-.02.11-.03.1-.03.1-.04.08-.04.07-.06.06-.05.04-.07.04-.07.04-.07.01-.08.02-.09.01-.09-.01-.09-.02-.08-.01-.07-.04-.05-.04-.07-.06-.06-.07-.04-.08-.04-.17-.07-.2-.04-.24-.03-.25-.01h-.15l-.15.01-.14.01-.14.03-.14.04-.14.04-.12.03-.14.06-.11.04-.12.05-.11.05-.1.05-.19.1-.13.07h-.16V5.59l.17-.07.21-.07.28-.07.3-.08.35-.07.34-.06.36-.03.36-.01.32.01.29.02.28.04.26.04.24.07.2.07.2.08.18.11.15.11.12.13.11.14.1.13.07.17.06.17.02.18.02.18-.02.15-.01.14-.03.12-.04.13-.04.12-.07.12-.07.11-.08.12-.1.09-.1.09-.09.08-.13.08-.11.07-.12.06-.13.04-.13.04v.07l.09.03.13.02.12.04.14.06.12.06.13.06.12.09.1.07zm7.4 3.22h-1.68V7.59l-2.6 4.47h-1.57V5.27h1.67v4.05l2.41-4.05h1.77v6.79zm6.82-2.08-.02.25-.04.22-.06.23-.08.19-.11.19-.11.17-.14.14-.15.14-.21.13-.19.13-.22.1-.22.06-.25.06-.28.04-.3.03h-3.06V5.27h2.41l.34.01.31.02.26.01.22.03.18.03.19.05.18.07.17.08.17.11.15.11.07.07.05.09.06.07.04.08.08.16.06.18.04.21v.32l-.01.12-.02.11-.03.12-.04.11-.04.11-.04.09-.07.11-.06.09-.06.09-.09.07-.08.09-.08.07-.1.05-.11.06-.1.05v.03l.15.04.14.04.14.06.14.07.11.07.12.08.1.08.1.1.09.11.07.11.07.12.06.14.04.14.03.15.01.17.02.16zm-2.19-2.79-.01-.08-.02-.08-.02-.09-.03-.08-.06-.08-.05-.07-.07-.06-.09-.04-.09-.04-.09-.03-.11-.01H80.36l-.17-.02h-.51v1.44h.83l.08-.01.1-.02.08-.04.1-.03.1-.05.07-.07.07-.07.04-.08.04-.08.01-.1.02-.1.01-.11zm.43 2.77-.01-.16-.02-.12-.04-.12-.06-.1-.08-.08-.08-.07-.1-.06-.12-.05-.09-.03-.09-.02-.13-.01-.12-.01h-1.04v1.7h.08l.32-.02h.61l.13-.01.13-.03.13-.03.14-.05.09-.06.1-.06.08-.09.06-.08.05-.11.03-.1.02-.11.01-.12z" style="fill:#323234"/></svg>
            </div>
            <div class="contacts">
                <div class="contacts__address">
                    <svg class="contacts__address-svg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
                         width="16" height="21" viewBox="0 0 16 21"
                         style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd"><path d="M7.24 1.44c3.62 0 6.55 2.93 6.55 6.55 0 2.92-2.29 5.16-3.74 7.51-1.12 1.78-2.19 3.87-2.81 6.43-.64-2.66-1.78-4.81-2.94-6.64C2.86 13 .69 10.85.69 7.99c0-3.62 2.93-6.55 6.55-6.55zm0 3.5c1.65 0 3 1.34 3 3a3 3 0 0 1-6 0c0-1.66 1.35-3 3-3z" style="fill:gray"/>
                    </svg>
                    <span class="contact__mail_address">
                        г.Челябинск, ул.Шарова, 73. склад №5
                    </span>
                </div>
                <div class="contact__email">
                    <svg class="contact__email-svg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20"
                         height="15" viewBox="0 0 20 15"
                         style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd"><path d="M6.8 7.5.64 2.19V12.8L6.8 7.5zm5.73.59-1.67 1.42c-.12.11-.25.19-.39.24-.15.05-.3.08-.46.08-.17 0-.32-.03-.47-.08-.14-.05-.27-.13-.39-.24h-.01L7.48 8.09l-6.13 5.27h17.3l-6.12-5.27zm.68-.59 6.15 5.3V2.19L13.21 7.5zM1.35 1.64l8.43 7.25c.03.03.06.05.1.06.04.01.08.02.13.02.04 0 .09-.01.12-.02.04-.01.07-.03.1-.05l8.43-7.26H1.35z" style="fill:gray"/>
                    </svg>
                    <span class="email_address">
                       <a class="contact__link" href="mailto:mk-abraziv@mail.ru">mk-abraziv@mail.ru</a>
                    </span>
                </div>
            </div>
            <div class="contact__phone">
                <svg class="contact__phone_svg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="70" height="70" viewBox="0 0 70 70"
                     shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                     image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><defs><style>.fil3 {
                    fill: #fefefe
                }</style></defs>
                    <g id="Слой_x0020_1"><g id="_1642777459104"><path d="M68.93 34.71c0 18.66-15.13 33.79-33.8 33.79-13.11 0-24.48-7.46-30.08-18.37v-.01a33.553 33.553 0 0 1-3.72-15.41c0-18.67 15.13-33.8 33.8-33.8 7.44 0 14.31 2.4 19.89 6.47 8.43 6.15 13.91 16.1 13.91 27.33z" fill="#00a890"/><path
                            d="M5.05 50.12a33.553 33.553 0 0 1-3.72-15.41c0-18.67 15.13-33.8 33.8-33.8 7.44 0 14.31 2.4 19.89 6.47-1.1-.05-2.18-.07-3.23-.07-45.22 0-46.73 42.5-46.74 42.81z"
                            fill="#148778"/><path class="fil3"
                                                  d="m24.31 31.5.51-.41c2.12-1.7 2.11-3.89-.05-6.58-.82-1.02-1.54-1.58-2.16-1.66-.63-.1-1.42.24-2.37 1l-.6.48c1.05.67 1.89 1.38 2.49 2.13 1.15 1.43 1.88 3.11 2.18 5.04zm16.12 18.81.66-.53c.85-.68 1.29-1.33 1.32-1.96.02-.63-.36-1.43-1.15-2.41-2.19-2.73-4.28-3.29-6.27-1.69l-.64.51c1.76.74 3.25 1.86 4.47 3.38.69.85 1.22 1.76 1.61 2.7zm-6.1 2.38c1.85-.24 3.67-.87 5.48-1.88-.48-.97-1.03-1.86-1.67-2.65-1.08-1.34-2.56-2.46-4.47-3.38l-.3.24c-1.37 1.1-3.72-.42-7.05-4.56-3.44-4.29-4.47-6.99-3.1-8.09l.3-.24c-.31-2.08-1.02-3.8-2.11-5.17a9.123 9.123 0 0 0-2.43-2.1c-1.27 1.41-2.28 3.06-3.03 4.94.76 2.28 1.72 4.49 2.92 6.66s2.63 4.27 4.28 6.33c1.69 2.1 3.46 3.98 5.32 5.63 1.86 1.64 3.82 3.07 5.86 4.27zM54.35 33.67c-.66-4.59-2.52-8.62-5.51-12.12-3.36-3.92-7.6-6.49-13.07-7.81-.24.22-1.13.83-1.04 1.03.27.64.79 1.32 1.4 1.63 2 .99 4.25 1.57 6.11 2.77 5.42 3.48 8.64 8.5 9.62 14.91.15.93.43 1.96 1.69 1.69 1.16-.25.93-1.19.8-2.1zM35.62 24.54c4.38 1.54 7.09 4.59 8.15 9.11.1.44.1 1 .38 1.3.33.37.95.76 1.36.68.42-.08.74-.71.93-.92.18-5.26-6.07-12.37-11.08-12.85-.48-.04-1.28.43-1.44.85-.13.36.39 1.03.74 1.47.19.23.63.24.96.36z"/></g></g>
                </svg>
                <span class="contact__phone_number">
                    <a class="contact__link" href="tel:+79226392020">+7 (922) 639 20 20</a>
                </span>
            </div>
        </div>
        <nav class="header__nav_wrapper">
            <ul class="header__nav-mobile">
                <svg class="header__nav-arrow" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet" fill="black" style="">
                    <g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)" fill="" stroke="">
                        <path d="M275 670 l-39 -40 114 -115 115 -115 -115 -115 -115 -115 43 -42 42 -43 157 158 158 157 -155 155 c-85 85 -157 155 -160 155 -3 0 -24 -18 -45 -40z"/>
                    </g>
                </svg>
                <li class="header__list_item-mobile"><a href="index.html" class="header__link">Главная</a></li>
                <li class="header__list_item-mobile"><a href="about.html" class="header__link">О компании</a></li>
                
                <li class="header__list_item-mobile"><a href="abrasives.html" class="header__link">Абразивы</a></li>
                <li class="header__list_item-mobile"><a href="means_of_protection.html" class="header__link">Средства защиты</a></li>
                <li class="header__list_item-mobile"><a href="related_products.html" class="header__link">Сопутствующая продукция</a></li>

                <li class="header__list_item-mobile"><a href="delivery.html" class="header__link">Доставка</a></li>
                <li class="header__list_item-mobile"><a href="contact.html" class="header__link">Контакты</a></li>
            </ul>
            <ul class="header__nav">
                <li class="header__list_item"><a href="index.html" class="header__link">Главная</a></li>
                <li class="header__list_item"><a href="about.html" class="header__link">О компании</a></li>
                <li class="header__list_item have_a_submenu"><span class="header__link">Продукция</span></li>
                <ul class="header__nav_production ">
                    <li class="header__list_item header__sub_list_item"><a href="abrasives.html" class="header__link">Абразивы</a></li>
                    <li class="header__list_item header__sub_list_item"><a href="means_of_protection.html" class="header__link">Средства защиты</a></li>
                    <li class="header__list_item header__sub_list_item"><a href="related_products.html" class="header__link">Сопутствующая продукция</a></li>
                </ul>
                <li class="header__list_item"><a href="delivery.html" class="header__link">Доставка</a></li>
                <li class="header__list_item"><a href="contact.html" class="header__link">Контакты</a></li>
            </ul>
        </nav>      
    `;
    window.scroll(0,0);
})();



