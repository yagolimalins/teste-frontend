class Navbar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="styles/reset.css"/>
            <link rel="stylesheet" href="styles/global.css"/>

            <style>
                .hamburger {
                    display: none;
                    font-size: 25px;
                    cursor: pointer;
                }

                .navbar {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    min-height: 100%;
                    background-color: white;
                    border-style: solid;
                    border-width: 0px 2px 0px 0px;
                    border-color: var(--border-color);
                    gap: 38px;
                }

                .logo {
                    padding: 25px 0px;
                    width: 90px;
                }

                .avatar {
                    width: 30px;
                    display: none;
                    border-radius: 100px;
                    padding
                }

                .menu {
                    display: flex;
                    flex-direction: column;
                    padding: 0px 40px;
                    gap: 20px;
                }

                .link {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }

                .link:hover {
                    color: var(--brand-color)
                }

                .hovered {
                    color: var(--brand-color)
                }

                p {
                    white-space: nowrap;
                }

                .display {
                    display: block;
                }

                @media (max-width: 1000px) {
                    .hamburger {
                        display: block;
                        margin-left: 20px;
                    }

                    .navbar {
                        flex-direction: row;
                        justify-content: space-between;
                        width: 100%;
                        border-width: 2px 0px 2px 0px;
                        min-height: auto;
                    }

                    .logo {
                        width: 68px;
                        padding: 20px 0px;
                    }

                    .menu {
                        display: none;
                    }

                    .avatar {
                        display: block;
                        margin-right: 20px;
                    }
                }
            </style>

            <nav class="navbar">
                <div class="hamburger">☰</div>
                <div>
                    <img class="logo" src="assets/logo/doity.png" alt="">
                </div>
                <img class="avatar" src="assets/images/avatar.webp" alt="">
                <ul class="menu">
                    <li>
                        <a href="#" class="link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M9.75 15.7495C9.75 14.6449 10.6455 13.7495 11.75 13.7495H12.25C13.3546 13.7495 14.25 14.6449 14.25 15.7495V19.2495H9.75V15.7495Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p>Início</p>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M9.75 8.75V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M5 8.25H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p>Painel</p>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4.75 19.2501L9 18.2501L18.2929 8.9572C18.6834 8.56667 18.6834 7.93351 18.2929 7.54298L16.4571 5.7072C16.0666 5.31667 15.4334 5.31667 15.0429 5.7072L5.75 15.0001L4.75 19.2501Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M19.25 19.25H13.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p>Editar Evento</p>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14.25 8.75H11.375C10.4775 8.75 9.75 9.47754 9.75 10.375C9.75 11.2725 10.4775 12 11.375 12H12.625C13.5225 12 14.25 12.7275 14.25 13.625C14.25 14.5225 13.5225 15.25 12.625 15.25H9.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 7.75V8.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 15.75V16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p>Financeiro</p>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99998 4C6.89466 4 5 5.47253 5 7.5C5 9.52747 6.89466 11 8.99998 11C11.1053 11 13 9.52747 13 7.5C13 5.47253 11.1053 4 8.99998 4ZM6.57427 7.5C6.57427 6.50698 7.55793 5.53314 8.99998 5.53314C10.442 5.53314 11.4257 6.50698 11.4257 7.5C11.4257 8.49302 10.442 9.46687 8.99998 9.46687C7.55793 9.46687 6.57427 8.49302 6.57427 7.5Z" fill="currentColor"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7C14.674 7 13 8.2482 13 10C13 11.7518 14.674 13 16.5 13C18.326 13 20 11.7518 20 10C20 8.2482 18.326 7 16.5 7ZM14.6218 10C14.6218 9.28683 15.3575 8.53957 16.5 8.53957C17.6425 8.53957 18.3783 9.28683 18.3783 10C18.3783 10.7132 17.6425 11.4605 16.5 11.4605C15.3575 11.4605 14.6218 10.7132 14.6218 10Z" fill="currentColor"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5805 12.2749C2.97797 13.2789 2.00002 15.066 2.00002 16.9925L2.00001 17.4336C1.99995 17.6024 1.99989 17.7464 2.01387 17.8771C2.13273 18.9882 2.9882 19.8642 4.06986 19.9858C4.19712 20.0001 4.33744 20 4.50216 20H13.4977C13.6625 20 13.8029 20.0001 13.9301 19.9858C15.0118 19.8642 15.8673 18.9882 15.9862 17.8771C16.0001 17.7464 16.0001 17.6024 16 17.4336V16.9925C16 15.066 15.0221 13.2789 13.4195 12.2749C10.7064 10.575 7.29363 10.575 4.5805 12.2749ZM3.52783 16.9925C3.52783 15.6137 4.22774 14.3336 5.37626 13.6141C7.60078 12.2204 10.3992 12.2204 12.6237 13.6141C13.7722 14.3336 14.4721 15.6137 14.4721 16.9925V17.3949C14.4721 17.6226 14.471 17.6725 14.4674 17.7058C14.427 18.0843 14.1352 18.3845 13.7639 18.4263C13.7311 18.43 13.6821 18.4312 13.4603 18.4312H4.53975C4.31788 18.4312 4.2689 18.43 4.23614 18.4263C3.86483 18.3845 3.57303 18.0843 3.53255 17.7058C3.52899 17.6725 3.52783 17.6226 3.52783 17.3949V16.9925Z" fill="currentColor"></path>
                                <path d="M20.0687 13.872C19.1098 13.2758 18.0271 12.9865 16.9501 13.0005C16.8545 13.0018 16.7588 13.0054 16.6633 13.0115C16.2757 13.0359 15.9782 13.3927 16.0013 13.8107C16.0243 14.2286 16.3588 14.5453 16.7462 14.5209C16.8198 14.5162 16.8936 14.5134 16.9673 14.5124C17.7989 14.5016 18.6302 14.7252 19.3619 15.1802C20.1364 15.6617 20.5904 16.5045 20.5904 17.3919V17.656C20.5905 17.7678 20.5896 17.8104 20.5864 17.8396C20.5529 18.1508 20.3007 18.4414 19.9272 18.4831C19.8911 18.4872 19.8425 18.488 19.7342 18.488H17.4521C17.0639 18.488 16.7473 18.8252 16.7473 19.2439C16.7473 19.6626 17.0639 20 17.4521 20H19.7478C19.8356 20.0001 19.9558 20.0002 20.073 19.9871C21.0536 19.8777 21.8716 19.0807 21.9866 18.0133C22.0002 17.8875 22.0001 17.7594 22 17.6708V17.6695V17.6551V17.3919C22 15.9392 21.2569 14.6107 20.0687 13.872Z" fill="currentColor"></path>
                            </svg>
                            <p>Inscrições</p>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4.75 9.75C4.75 8.64543 5.64543 7.75 6.75 7.75H17.25C18.3546 7.75 19.25 8.64543 19.25 9.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V9.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8.75 7.5V6.75C8.75 5.64543 9.64543 4.75 10.75 4.75H13.25C14.3546 4.75 15.25 5.64543 15.25 6.75V7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M5 13.25H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8.75 11.75V14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M15.25 11.75V14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p>Secretaria</p>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18.25 7.75H5.75V15.25C5.75 16.3546 6.64543 17.25 7.75 17.25H16.25C17.3546 17.25 18.25 16.3546 18.25 15.25V7.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M18.25 4.75H5.75C5.19772 4.75 4.75 5.19772 4.75 5.75V6.75C4.75 7.30228 5.19772 7.75 5.75 7.75H18.25C18.8023 7.75 19.25 7.30228 19.25 6.75V5.75C19.25 5.19772 18.8023 4.75 18.25 4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 17.5V19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p>Programação</p>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M14.25 8.75L18.25 4.75H5.75L9.75 8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 19.25C14.8995 19.25 17.25 16.8995 17.25 14C17.25 11.1005 14.8995 8.75 12 8.75C9.10051 8.75 6.75 11.1005 6.75 14C6.75 16.8995 9.10051 19.25 12 19.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p>Certificados</p>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M15.25 12C15.25 16.5 13.2426 19.25 12 19.25C10.7574 19.25 8.75 16.5 8.75 12C8.75 7.5 10.7574 4.75 12 4.75C13.2426 4.75 15.25 7.5 15.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M5 12H12H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p>Página do Evento</p>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19.25 6.75C19.25 6.19772 18.8023 5.75 18.25 5.75H5.75C5.19772 5.75 4.75 6.19771 4.75 6.75V8.04566C4.75 8.50939 5.07835 8.89813 5.49029 9.11107C6.53552 9.65136 7.25 10.7422 7.25 12C7.25 13.2578 6.53552 14.3486 5.49029 14.8889C5.07835 15.1019 4.75 15.4906 4.75 15.9543V17.25C4.75 17.8023 5.19771 18.25 5.75 18.25H18.25C18.8023 18.25 19.25 17.8023 19.25 17.25V15.9543C19.25 15.4906 18.9216 15.1019 18.5097 14.8889C17.4645 14.3486 16.75 13.2578 16.75 12C16.75 10.7422 17.4645 9.65136 18.5097 9.11107C18.9216 8.89813 19.25 8.50939 19.25 8.04566V6.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p>Sorteio</p>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M5.5 6.5L12 12.25L18.5 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p>Mala Direta</p>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M18 9.25H13.75V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M9.75 15.25H14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M9.75 12.25H14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p>Trabalhos</p>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z" stroke="var(--brand-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p class="hovered">Pesquisa de Satisfação</p>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8996 3.6001C18.8326 3.6001 20.3996 5.1671 20.3996 7.1001C20.3996 9.0331 18.8326 10.6001 16.8996 10.6001C15.618 10.6001 14.4974 9.91131 13.8876 8.88373L10.44 10.9522C10.5437 11.2831 10.5996 11.6351 10.5996 12.0001C10.5996 12.3651 10.5437 12.7171 10.44 13.0479L13.8876 15.1165C14.4974 14.0889 15.618 13.4001 16.8996 13.4001C18.8326 13.4001 20.3996 14.9671 20.3996 16.9001C20.3996 18.8331 18.8326 20.4001 16.8996 20.4001C14.9666 20.4001 13.3996 18.8331 13.3996 16.9001C13.3996 16.7551 13.4084 16.6123 13.4256 16.472L9.76106 14.2732C9.11911 15.0241 8.16494 15.5001 7.09961 15.5001C5.16661 15.5001 3.59961 13.9331 3.59961 12.0001C3.59961 10.0671 5.16661 8.5001 7.09961 8.5001C8.16494 8.5001 9.11911 8.97607 9.76106 9.72695L13.4256 7.52826C13.4084 7.38794 13.3996 7.24504 13.3996 7.1001C13.3996 5.1671 14.9666 3.6001 16.8996 3.6001ZM16.8996 5.0001C18.0594 5.0001 18.9996 5.9403 18.9996 7.1001C18.9996 8.25989 18.0594 9.2001 16.8996 9.2001C15.7398 9.2001 14.7996 8.25989 14.7996 7.1001C14.7996 5.9403 15.7398 5.0001 16.8996 5.0001ZM7.09961 9.9001C8.25941 9.9001 9.19961 10.8403 9.19961 12.0001C9.19961 13.1599 8.25941 14.1001 7.09961 14.1001C5.93981 14.1001 4.99961 13.1599 4.99961 12.0001C4.99961 10.8403 5.93981 9.9001 7.09961 9.9001ZM18.9996 16.9001C18.9996 15.7403 18.0594 14.8001 16.8996 14.8001C15.7398 14.8001 14.7996 15.7403 14.7996 16.9001C14.7996 18.0599 15.7398 19.0001 16.8996 19.0001C18.0594 19.0001 18.9996 18.0599 18.9996 16.9001Z" fill="currentColor"></path>
                            </svg>
                            <p>Integrações</p>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M13.1191 5.61336C13.0508 5.11856 12.6279 4.75 12.1285 4.75H11.8715C11.3721 4.75 10.9492 5.11856 10.8809 5.61336L10.7938 6.24511C10.7382 6.64815 10.4403 6.96897 10.0622 7.11922C10.006 7.14156 9.95021 7.16484 9.89497 7.18905C9.52217 7.3524 9.08438 7.3384 8.75876 7.09419L8.45119 6.86351C8.05307 6.56492 7.49597 6.60451 7.14408 6.9564L6.95641 7.14408C6.60452 7.49597 6.56492 8.05306 6.86351 8.45118L7.09419 8.75876C7.33841 9.08437 7.3524 9.52216 7.18905 9.89497C7.16484 9.95021 7.14156 10.006 7.11922 10.0622C6.96897 10.4403 6.64815 10.7382 6.24511 10.7938L5.61336 10.8809C5.11856 10.9492 4.75 11.372 4.75 11.8715V12.1285C4.75 12.6279 5.11856 13.0508 5.61336 13.1191L6.24511 13.2062C6.64815 13.2618 6.96897 13.5597 7.11922 13.9378C7.14156 13.994 7.16484 14.0498 7.18905 14.105C7.3524 14.4778 7.3384 14.9156 7.09419 15.2412L6.86351 15.5488C6.56492 15.9469 6.60451 16.504 6.9564 16.8559L7.14408 17.0436C7.49597 17.3955 8.05306 17.4351 8.45118 17.1365L8.75876 16.9058C9.08437 16.6616 9.52216 16.6476 9.89496 16.811C9.95021 16.8352 10.006 16.8584 10.0622 16.8808C10.4403 17.031 10.7382 17.3519 10.7938 17.7549L10.8809 18.3866C10.9492 18.8814 11.3721 19.25 11.8715 19.25H12.1285C12.6279 19.25 13.0508 18.8814 13.1191 18.3866L13.2062 17.7549C13.2618 17.3519 13.5597 17.031 13.9378 16.8808C13.994 16.8584 14.0498 16.8352 14.105 16.8109C14.4778 16.6476 14.9156 16.6616 15.2412 16.9058L15.5488 17.1365C15.9469 17.4351 16.504 17.3955 16.8559 17.0436L17.0436 16.8559C17.3955 16.504 17.4351 15.9469 17.1365 15.5488L16.9058 15.2412C16.6616 14.9156 16.6476 14.4778 16.811 14.105C16.8352 14.0498 16.8584 13.994 16.8808 13.9378C17.031 13.5597 17.3519 13.2618 17.7549 13.2062L18.3866 13.1191C18.8814 13.0508 19.25 12.6279 19.25 12.1285V11.8715C19.25 11.3721 18.8814 10.9492 18.3866 10.8809L17.7549 10.7938C17.3519 10.7382 17.031 10.4403 16.8808 10.0622C16.8584 10.006 16.8352 9.95021 16.8109 9.89496C16.6476 9.52216 16.6616 9.08437 16.9058 8.75875L17.1365 8.4512C17.4351 8.05308 17.3955 7.49599 17.0436 7.1441L16.8559 6.95642C16.504 6.60453 15.9469 6.56494 15.5488 6.86353L15.2412 7.09419C14.9156 7.33841 14.4778 7.3524 14.105 7.18905C14.0498 7.16484 13.994 7.14156 13.9378 7.11922C13.5597 6.96897 13.2618 6.64815 13.2062 6.24511L13.1191 5.61336Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M13.25 12C13.25 12.6904 12.6904 13.25 12 13.25C11.3096 13.25 10.75 12.6904 10.75 12C10.75 11.3096 11.3096 10.75 12 10.75C12.6904 10.75 13.25 11.3096 13.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p>Avançado</p>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H13.25C14.3546 4.75 15.25 5.64543 15.25 6.75V17.25C15.25 18.3546 14.3546 19.25 13.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M10.25 16.75H9.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M18.75 14.25C18.75 14.25 19.25 13.3438 19.25 12C19.25 10.6562 18.75 9.75 18.75 9.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p>Aplicativo</p>
                        </a>
                    </li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('my-navbar', Navbar);