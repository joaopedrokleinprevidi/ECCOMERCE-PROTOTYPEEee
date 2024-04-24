import { HeaderWrapper, ContainerHeader } from './styles.ts'

// HeaderWrapper, ContainerHeader, LogoFolhaRainha, SearchInput, HeaderSections, AccountOptionsContainer, ServiceOptionsContainer, ServiceIcons, ListaUL, ListaLI, ListaHREF, CarrinhoValue, CategoriasNavContainer, CategoriasUL, CategoriasLI, CategoriasItens

function Header(){
    return(
        <HeaderWrapper>
            <ContainerHeader>
                <a href="./index.html"> <LogoFolhaRainha /> </a>
                <SearchInput />
                <HeaderSections />
                <AccountOptionsContainer />
            </ContainerHeader>
        </HeaderWrapper>
    )
}


/* 
<div class="container-header">
            <a href="./index.html">
                <img src="../assets/images/logos-folhaRainha/logo_folha_rainha_fundo_branco.png"
                    class="logo-folha-rainha" alt="Logo da loja Folha Rainha">
            </a>
            <div class="header-sections search-container">
                <input type="text" name="search" class="search-input" placeholder="Digite oque você busca">
                <span class="material-symbols-outlined">
                    search
                </span>
            </div>
            <div class="header-sections">
                <span class="material-symbols-outlined">
                    shield_person
                </span>
                <p id="accountHeader">Conta</p>
                <div class="container-account-options">
                    <ul id="accountOptions">
                        <li><span class="material-symbols-outlined">login</span><a href="./signUpOrSignIn.html">Entre
                                ou cadastre-se</a>
                        </li>
                        <li><span class="material-symbols-outlined">account_circle</span><a
                                href="./myAccount.html">Minha conta</a>
                        </li>
                        <li><span class="material-symbols-outlined">article</span><a href="#">Meus pedidos</a></li>
                        <li><span class="material-symbols-outlined">logout</span><a href="#"
                                class="button-logout">Sair</a></li>
                    </ul>
                </div>
            </div>
            <div class="header-sections">
                <span class="material-symbols-outlined">
                    call_quality
                </span>
                <p id="serviceHeader">Central de Atendimento</p>
                <div class="container-service-options">
                    <ul>
                        <li><a href="#" style="text-align: center;">Para atendimento ou dúvidas, contate-nos:</a></li>
                        <li><span class="material-symbols-outlined">
                                schedule
                            </span> <a href="#">SAC: Seg à Sex das 9hs às 17hs</a>
                        </li>
                        <hr>
                        <li>
                            <img src="../assets/images/contact-service/phone-call.png" class="services-icons"
                                alt="Phone Call Icon">
                            <a href="#"> (54) 99242-3443</a>
                        </li>
                        <li>
                            <img src="../assets/images/contact-service/whatsapp.png" class="services-icons"
                                alt="WhatsApp Icon">
                            <a href="#">(54) 99242-3443</a>
                        </li>
                        <li>
                            <img src="../assets/images/contact-service/mail.png" class="services-icons"
                                alt="Email Icon"> <a
                                href="mailto:lojafolharainha@gmail.com">lojafolharainha@gmail.com</a>
                        </li>
                        <li>
                            <img src="../assets/images/contact-service/instagram.png" class="services-icons"
                                alt="Instagram Icon">
                            <a href="#">@lojafolharainha</a>
                        </li>
                        <li>
                            <img src="../assets/images/contact-service/facebook.png" class="services-icons"
                                alt="Facebook Icon">
                            <a href="#">lojafolharainha</a>
                        </li>
                        <li>
                            <img src="../assets/images/contact-service/tik-tok.png" class="services-icons"
                                alt="TikTok Icon"><a href="#">@lojafolharainha</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="header-sections">
                <span class="material-symbols-outlined">shopping_cart</span>
                <p>Carrinho</p>
                <p id="cartValue" class="carrinho-value">10</p>
            </div>
        </div>

        <nav>
            <ul>
                <li class="categorias"><a href="#">Camisetas</a></li>
                <li class="categorias"><a href="#">Canecas</a></li>
                <li class="categorias"><a href="#">Squeezes</a></li>
                <li class="categorias"><a href="#">Porta-Guias</a></li>
            </ul>
        </nav>
    </header>

*/