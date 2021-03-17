import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import './libstyle/DesktopFooter.css';
const DesktopFooter = ({
  handleInputValue,
  handleSubmitEmailSubcribe,
  email,
}) => {
  return (
    <>
      <section className={'footer-top-content'}>
        <div className='footer-top-left'>
          <div className='footer-logo'>
            <svg
              id='logo-svg'
              xmlns='http://www.w3.org/2000/svg'
              width='91'
              height='15'
            >
              <path
                fill='currentColor'
                fillRule='evenodd'
                d='M.76 4.25h1.663v1.58h.042C3.269 4.61 4.426 4 5.937 4c.665 0 1.268.14 1.809.417.54.277.922.748 1.144 1.413a3.753 3.753 0 0 1 1.424-1.351A4.019 4.019 0 0 1 12.258 4c.54 0 1.03.059 1.466.176.436.118.81.302 1.123.551.311.25.554.572.727.967.174.395.26.87.26 1.425V15h-1.767V7.951a5 5 0 0 0-.083-.935 1.91 1.91 0 0 0-.312-.76 1.557 1.557 0 0 0-.634-.509c-.27-.124-.62-.187-1.05-.187-.874 0-1.56.25-2.059.749-.499.499-.748 1.164-.748 1.996V15H7.413V7.951c0-.346-.031-.665-.093-.956a2.03 2.03 0 0 0-.323-.76 1.505 1.505 0 0 0-.613-.498c-.256-.118-.586-.177-.988-.177-.513 0-.953.104-1.32.312a2.992 2.992 0 0 0-1.393 1.653c-.104.312-.156.572-.156.78V15H.76V4.25zm31.233 0h1.664v1.705h.041c.735-1.303 1.9-1.954 3.494-1.954.707 0 1.296.097 1.767.29.471.195.853.465 1.144.812.29.346.495.759.613 1.237.118.478.177 1.008.177 1.59V15h-1.768V7.723c0-.666-.194-1.193-.582-1.58-.388-.389-.922-.583-1.6-.583-.541 0-1.01.083-1.404.25a2.632 2.632 0 0 0-.988.707c-.263.305-.46.662-.593 1.07a4.355 4.355 0 0 0-.197 1.342V15h-1.768V4.25zm25.059 0h1.663v1.58h.042C59.561 4.61 60.718 4 62.229 4c.666 0 1.269.14 1.81.417.54.277.921.748 1.143 1.413a3.753 3.753 0 0 1 1.424-1.351A4.019 4.019 0 0 1 68.55 4c.54 0 1.03.059 1.466.176a3.05 3.05 0 0 1 1.123.551c.312.25.554.572.728.967.173.395.26.87.26 1.425V15h-1.768V7.951a5 5 0 0 0-.083-.935 1.91 1.91 0 0 0-.312-.76 1.557 1.557 0 0 0-.634-.509c-.27-.124-.62-.187-1.05-.187-.873 0-1.56.25-2.058.749-.5.499-.749 1.164-.749 1.996V15h-1.767V7.951c0-.346-.032-.665-.094-.956a2.03 2.03 0 0 0-.322-.76 1.505 1.505 0 0 0-.614-.498c-.256-.118-.585-.177-.987-.177-.513 0-.953.104-1.32.312a2.992 2.992 0 0 0-1.394 1.653c-.104.312-.156.572-.156.78V15h-1.767V4.25zM88.39.154h1.767V15H88.39V.154z'
              ></path>
            </svg>
          </div>
          <div className='footer-info'>
            <p>Search</p>
            <p>Contact Us</p>
            <p>Shipping</p>
            <p>Returns + Exchanges</p>
            <p>Terms + Conditions</p>
            <p>Privacy policy</p>
            <p>Our story</p>
          </div>
        </div>
        <div className='footer-top-right'>
          <div className='label-wrapper'>
            <label htmlFor='input-user-email'>
              BE FIRST TO KNOW ABOUT RELEASES AND RESTOCKS
            </label>
          </div>
          <div className='footer-email-input'>
            <form onSubmit={handleSubmitEmailSubcribe} noValidate>
              <input
                type='email'
                placeholder='Email address'
                id='input-user-email'
                value={email}
                onChange={handleInputValue}
                autoComplete='off'
                autoCapitalize='off'
              />
              <button type='button'>SIGN UP</button>
            </form>
          </div>
        </div>
      </section>
      <hr />
      <section className='footer-bottom-content'>
        <span id='code-of-conduct'>
          © 2021 mnml. all rights reserved built by Pixel Union
        </span>
        <div className='payment'>
          <div className='payment-type amazon_payments'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='51'
              height='32'
              viewBox='0 0 51 32'
            >
              <path
                fill='currentColor'
                fillRule='evenodd'
                d='M6.484 20.17c-.32 0-.603.038-.91.136v3.938c.307.148.553.21.885.21 1.193 0 1.906-.825 1.906-2.19 0-1.318-.7-2.093-1.883-2.093zm24.092 0c-.738 0-1.28.64-1.34 1.564h2.57c-.048-.8-.442-1.563-1.23-1.563zM11.11 22.68c-.295.15-.455.432-.455.788 0 .603.37.984.947.984.652 0 1.144-.43 1.464-.763v-1.256l-.91.025c-.468.024-.788.085-1.047.22zm-.443-13.485c-.8 0-1.66.172-1.66 1.12 0 .48.245.812.676.812.307 0 .59-.197.775-.504.22-.38.21-.75.21-1.18v-.247zm24.782-2.09c-.825 0-.875 1.12-.875 1.82s-.012 2.19.86 2.19c.862 0 .912-1.206.912-1.944 0-.48-.025-1.057-.172-1.513-.123-.394-.38-.554-.726-.554zM23.61 10.326c0 .48.246.812.677.812.307 0 .59-.198.774-.505.22-.38.21-.75.21-1.18v-.247c-.8-.012-1.662.16-1.662 1.12zM47.31.004H3.752C1.685.004 0 1.887 0 4.2v23.6c0 2.325 1.685 4.196 3.752 4.196H47.31c2.067 0 3.753-1.883 3.753-4.196V4.2c0-2.313-1.673-4.196-3.753-4.196zM27.992 10.992c0-.135 0-.357.135-.566l2.202-3.15h-1.92a.207.207 0 0 1-.21-.21v-.81c0-.124.1-.21.21-.21h3.667c.11 0 .21.086.21.21v.7c0 .11-.1.27-.272.517L30.12 10.18c.7-.012 1.452.086 2.092.443.148.086.184.197.197.32v.874c0 .123-.136.258-.272.184a4.225 4.225 0 0 0-3.876.013c-.123.06-.258-.074-.258-.184v-.838zm.11 2.018c1.195-.837 3.163-.603 3.385-.32.234.283-.06 2.252-1.18 3.187-.173.148-.333.06-.26-.123.26-.627.825-2.042.555-2.387s-1.772-.16-2.448-.086c-.21.038-.234-.147-.05-.27zM25.14 7.35c-.135-.21-.394-.295-.627-.295-.43 0-.8.22-.897.677-.025.1-.1.197-.197.21l-1.083-.112c-.086-.025-.197-.1-.172-.234.247-1.317 1.428-1.71 2.5-1.71.54 0 1.254.148 1.672.554.54.504.492 1.18.492 1.92v1.734c0 .517.22.75.418 1.034.074.1.086.22 0 .295-.234.197-.627.54-.86.738-.075.062-.185.075-.26.026-.368-.307-.43-.455-.64-.738-.614.627-1.045.812-1.832.812-.935 0-1.673-.578-1.673-1.735 0-.91.492-1.526 1.194-1.82.604-.272 1.453-.32 2.093-.382v-.148c.012-.283.037-.59-.123-.824zM13.522 6.267c0-.11.1-.21.21-.21h1.033c.11 0 .197.087.21.198v.75h.024c.27-.725.774-1.057 1.463-1.057.7 0 1.132.332 1.44 1.058.27-.726.886-1.058 1.538-1.058.468 0 .985.197 1.293.627.357.48.283 1.18.283 1.797v3.605c0 .11-.1.21-.22.21h-1.108a.214.214 0 0 1-.197-.21v-3.04c0-.245.026-.836-.024-1.07-.086-.38-.332-.492-.652-.492-.27 0-.554.184-.664.467s-.1.775-.1 1.095v3.027c0 .11-.098.21-.208.21h-1.12a.214.214 0 0 1-.197-.21V8.937c0-.64.1-1.575-.69-1.575-.8 0-.774.91-.774 1.575v3.027c0 .11-.098.21-.208.21h-1.12c-.11-.013-.197-.087-.197-.185V6.266zm8.687 9.093c2.324 0 4.872-.48 7.21-1.477.357-.148.652.234.308.492-2.092 1.538-5.13 2.362-7.74 2.362-3.667 0-6.964-1.354-9.45-3.605-.197-.172-.025-.418.21-.283 2.694 1.562 6.016 2.51 9.46 2.51zM10.53 7.35c-.135-.21-.394-.295-.627-.295-.43 0-.8.22-.898.677-.012.1-.086.197-.197.21L7.727 7.83c-.086-.025-.197-.1-.172-.234.246-1.317 1.427-1.71 2.498-1.71.54 0 1.255.148 1.673.554.54.504.492 1.18.492 1.92v1.734c0 .517.22.75.418 1.034.074.1.086.22 0 .295-.234.197-.627.54-.86.738-.075.062-.185.075-.26.026-.368-.307-.43-.455-.64-.738-.614.627-1.045.812-1.832.812-.935 0-1.673-.578-1.673-1.735 0-.91.493-1.526 1.195-1.82.603-.272 1.452-.32 2.092-.382v-.148c.012-.283.025-.59-.123-.824zM6.46 25.253c-.296 0-.604-.06-.887-.16V27.7c0 .075-.06.124-.123.124h-.603a.123.123 0 0 1-.123-.123v-7.874c0-.05.037-.1.074-.11.54-.21 1.144-.32 1.686-.32 1.723 0 2.756 1.082 2.756 2.903.012 1.734-1.132 2.952-2.78 2.952zm6.877-.11a.12.12 0 0 1-.123-.1l-.086-.43c-.48.43-1.01.64-1.563.64-1.058 0-1.797-.727-1.797-1.76 0-.715.344-1.268.984-1.564.38-.173.8-.222 1.366-.247l.96-.025v-.283c0-.763-.38-1.18-1.083-1.18-.652 0-1.058.208-1.44.442-.025.025-.06.025-.1.012s-.06-.026-.073-.062l-.258-.467c-.037-.06-.012-.134.037-.17a3.385 3.385 0 0 1 1.86-.567c1.217 0 1.918.69 1.918 1.895v1.698c0 1.095.037 1.71.11 1.993.013.036 0 .073-.024.11-.025.025-.06.05-.1.05h-.59zm5.943-5.464l-1.98 5.893c-.678 1.98-1.54 2.252-2.363 2.252-.357 0-.603-.05-.886-.16-.06-.025-.085-.086-.073-.148l.135-.53c.012-.036.037-.06.06-.085a.14.14 0 0 1 .1 0c.21.086.43.123.664.123.75 0 1.28-.615 1.66-1.944l-2.337-5.39c-.013-.036-.013-.085.01-.122s.062-.06.1-.06h.69c.048 0 .098.024.11.073l1.82 4.283 1.39-4.27c.013-.05.062-.086.124-.086h.652c.037 0 .074.025.1.05.024.048.036.085.024.122zm8.22 5.327c0 .074-.06.123-.123.123h-.603a.123.123 0 0 1-.123-.123v-3.42c0-.985-.257-1.39-.873-1.39-.627 0-1.218.442-1.673.848.012.11.012.22.012.332v3.642c0 .073-.06.122-.123.122h-.603a.123.123 0 0 1-.123-.123v-3.422c0-.984-.258-1.39-.874-1.39s-1.17.406-1.673.85v3.973c0 .075-.06.124-.123.124h-.603a.123.123 0 0 1-.123-.123v-5.364c0-.074.062-.123.124-.123h.504c.06 0 .11.05.123.11l.062.505c.627-.504 1.206-.738 1.797-.738.64 0 1.143.32 1.414.874.677-.578 1.34-.874 1.97-.874.786 0 1.636.517 1.636 1.98v3.606zm5.23-2.633c0 .074-.062.123-.124.123h-3.37c.048.923.528 1.957 1.77 1.957.518 0 .96-.184 1.244-.344.025-.012.06-.025.1-.012s.06.037.073.06l.21.444c.024.06.01.123-.05.16-.443.295-1.107.492-1.698.492-1.55 0-2.547-1.18-2.547-3.015 0-1.674.923-2.843 2.24-2.843 1.328 0 2.152 1.083 2.152 2.842v.134zm5.217 2.633c0 .074-.06.123-.123.123h-.603a.123.123 0 0 1-.122-.123v-3.42c0-1.256-.517-1.39-.91-1.39-.616 0-1.17.405-1.674.848v3.974c0 .073-.06.122-.123.122h-.602a.123.123 0 0 1-.123-.123v-5.366c0-.074.06-.123.123-.123h.504c.06 0 .11.05.123.112l.06.504c.628-.504 1.207-.738 1.798-.738.812 0 1.673.517 1.673 1.98v3.62zm-2.51-12.71c-1.625 0-2.51-1.428-2.51-3.188 0-1.785.897-3.163 2.51-3.163 1.648 0 2.546 1.415 2.546 3.224 0 1.736-.984 3.126-2.547 3.126zm6.545 12.45c-.307.235-.8.505-1.33.505-.762 0-1.18-.455-1.18-1.292v-3.667h-.75a.123.123 0 0 1-.124-.123v-.517c0-.074.06-.123.123-.123h.752v-1.083c0-.05.037-.1.086-.123l.603-.21c.038-.01.087-.01.112.013.037.025.05.06.05.1v1.29h1.463c.037 0 .086.026.1.05a.117.117 0 0 1 .01.11l-.208.518c-.025.05-.06.074-.123.074H40.31v3.617c0 .492.245.54.442.54.32 0 .64-.183.874-.356.025-.024.074-.024.1-.01.036.01.06.036.085.073l.21.443a.162.162 0 0 1-.037.172zM41.86 11.99V8.887c0-.627.073-1.538-.702-1.538-.27 0-.517.184-.64.455-.16.344-.172.7-.172 1.083v3.076c0 .11-.1.21-.22.21h-1.108a.214.214 0 0 1-.197-.21V6.242c.013-.1.1-.184.21-.184h1.034c.1 0 .172.074.197.16v.874h.026c.307-.787.75-1.157 1.514-1.157.504 0 .984.184 1.304.677.295.455.295 1.23.295 1.784V12c-.013.1-.1.185-.21.185h-1.12c-.11-.025-.197-.1-.21-.197zm2.165 13.263a2.794 2.794 0 0 1-1.526-.455c-.05-.037-.075-.1-.05-.148l.21-.492c.01-.037.036-.06.073-.074s.074-.012.1.012c.245.148.614.357 1.23.357.33 0 1.106-.086 1.106-.85 0-.516-.468-.725-1.022-.97l-.1-.05c-.614-.283-1.39-.627-1.39-1.66 0-.764.567-1.54 1.834-1.54.54 0 .997.136 1.28.26.05.024.074.06.074.11v.554c0 .037-.025.086-.06.1a.142.142 0 0 1-.124.01 2.6 2.6 0 0 0-1.157-.257c-.677 0-1.02.234-1.02.7 0 .48.405.702 1.02.985l.074.037c.38.172.762.357 1.045.652.258.27.38.615.38 1.046.038 1.02-.75 1.673-1.98 1.673z'
              ></path>
            </svg>
          </div>
          <div className='payment-type american_express'>
            <svg xmlns='http://www.w3.org/2000/svg' width='39' height='13'>
              <path
                fill='currentColor'
                d='M14.835 10.173l1.567-1.68v3.416l-1.567-1.736zM9.849 8.915v.776h2.24v.87h-2.24v.848h2.507l1.166-1.252-1.116-1.24H9.848v-.002h.001zm27.743.64c.348.36.509.802.509 1.396 0 1.281-.862 2.047-2.307 2.047h-1.987a.702.702 0 0 1-.647-.427c-.386.273-.901.427-1.534.427H29.64a.69.69 0 0 1-.306-.076.699.699 0 0 1-.306.076h-3.405a.7.7 0 0 1-.311-.079.673.673 0 0 1-.312.08h-1.024a.705.705 0 0 1-.705-.703v-.62a2.95 2.95 0 0 0-.002-.228 3.051 3.051 0 0 0-.207-.006h-.384v.854a.704.704 0 0 1-.706.702h-1.025a.704.704 0 0 1-.706-.702v-1.084c-.362.216-.861.357-1.55.357h-.568v.727a.704.704 0 0 1-.705.702h-1.983a.704.704 0 0 1-.528-.235l-.739-.83-.778.84a.703.703 0 0 1-.517.227H8.83a.704.704 0 0 1-.704-.704v-4.26c0-.389.315-.704.704-.704h4.103a.69.69 0 0 1 .524.234l.741.822.773-.832a.704.704 0 0 1 .518-.223h3.26c.713 0 1.214.158 1.573.39a.699.699 0 0 1 .623-.39h2.357c.54 0 1.066.02 1.56.283.05.03.086.07.135.104a.7.7 0 0 1 .623-.387h3.404c.264 0 .484.149.607.367.337-.228.78-.367 1.342-.367h2.044c.308 0 .56.196.657.47.35-.283.83-.47 1.468-.47h2.044c.39 0 .706.314.706.704v.907a.704.704 0 0 1-.323.59.264.264 0 0 1 .023.021zM20.467 9.44c0-1.18-.91-1.405-1.72-1.405h-3.26L14.19 9.43l-1.257-1.397H8.83v4.26h4.042l1.306-1.41 1.257 1.41h1.982v-1.43h1.273c.892.003 1.777-.243 1.777-1.425zm3.865.877c.267-.107.723-.454.723-1.135 0-.485-.203-.751-.524-.945-.337-.179-.712-.2-1.228-.2h-2.356v4.26h1.025V10.74h1.09c.373 0 .6.036.746.187.191.199.167.579.167.835v.533h1.023v-.845c-.004-.375-.024-.569-.17-.777a1.083 1.083 0 0 0-.496-.358zm4.693-2.28h-3.404v4.26h3.404v-.883l-2.389-.005v-.846h2.33v-.87h-2.33v-.776h2.39v-.88zm4.2 2.914c0-.438-.107-.698-.307-.904-.23-.232-.61-.327-1.164-.342l-.548-.016c-.174 0-.288-.011-.397-.049a.328.328 0 0 1-.223-.317c0-.135.042-.238.154-.307.102-.07.222-.078.41-.078h1.87V8.03h-2.044c-1.07 0-1.458.649-1.458 1.269 0 1.347 1.195 1.286 2.148 1.317.179 0 .284.03.364.095a.36.36 0 0 1 .124.28c0 .117-.05.214-.12.28-.086.081-.223.105-.416.105H29.64v.915h1.987c1.025.005 1.597-.423 1.597-1.341zm4.17 0c0-.438-.108-.698-.307-.904-.23-.232-.611-.327-1.165-.342l-.548-.016c-.174 0-.288-.011-.398-.049a.33.33 0 0 1-.222-.317c0-.135.042-.238.154-.307.1-.07.222-.078.41-.078h1.87V8.03h-2.044c-1.07 0-1.459.649-1.459 1.269 0 1.347 1.195 1.286 2.149 1.317.18 0 .284.03.363.095a.36.36 0 0 1 .124.28.38.38 0 0 1-.119.28c-.085.081-.223.105-.415.105h-1.98v.915h1.988c1.025.005 1.598-.423 1.598-1.341zM18.747 8.915h-1.33V10h1.317c.393 0 .637-.193.637-.56-.001-.375-.255-.525-.624-.525zm.6-6.466c.131-.07.21-.22.21-.405 0-.183-.082-.314-.214-.376-.121-.069-.307-.077-.484-.077h-1.256v.945h1.24c.196 0 .361-.003.504-.087zm4.367 6.545c-.124-.074-.307-.077-.486-.077h-1.257v.956h1.24c.199 0 .368-.006.506-.086a.46.46 0 0 0 .21-.41c-.002-.183-.08-.315-.213-.383zm3.769-7.567l-.7 1.698h1.408l-.708-1.698zM2.572 3.125h1.391l-.698-1.698-.693 1.698zm5.71 2.542a.706.706 0 0 1-.644-.419l-.134-.302v.017a.704.704 0 0 1-.704.703H4.725a.704.704 0 0 1-.653-.436l-.212-.514H2.678l-.216.517a.704.704 0 0 1-.649.434H.705a.703.703 0 0 1-.647-.98L1.882.426A.706.706 0 0 1 2.532 0h1.514c.282 0 .537.167.648.425l.383.891V.704c0-.388.315-.703.705-.703h1.665c.274 0 .524.16.64.409l.668 1.446L9.36.43c.11-.26.366-.43.647-.43h1.7c.144 0 .269.054.381.127a.687.687 0 0 1 .38-.126h3.408a.68.68 0 0 1 .353.109.69.69 0 0 1 .354-.11h2.346c.607 0 1.11.022 1.59.298.049.029.082.067.126.099A.702.702 0 0 1 21.273 0h1.042c.352 0 .631.262.684.597C23.455.202 24.076 0 24.914 0h.985a.7.7 0 0 1 .423.14.7.7 0 0 1 .42-.14h1.53c.28 0 .535.168.646.426l.375.875V.704c0-.388.315-.703.704-.703h1.555a.71.71 0 0 1 .603.34l.485.802v-.44c0-.388.315-.703.705-.703h1.044c.389 0 .705.315.705.703v4.26a.704.704 0 0 1-.705.704h-1.444a.707.707 0 0 1-.604-.34l-.626-1.036v.672a.704.704 0 0 1-.705.704h-2.076a.705.705 0 0 1-.65-.433l-.216-.518h-1.176l-.207.51a.703.703 0 0 1-.65.441h-1.196c-.453 0-1.268-.081-1.846-.566a.695.695 0 0 1-.678.566h-1.042a.695.695 0 0 1-.32-.085.689.689 0 0 1-.315.085h-1.03a.705.705 0 0 1-.705-.697l-.004-.538.002-.093c0-.058.001-.143-.003-.215a2.947 2.947 0 0 0-.198-.006h-.39v.846a.704.704 0 0 1-.705.703h-1.021a.688.688 0 0 1-.354-.108.68.68 0 0 1-.353.108h-3.408a.693.693 0 0 1-.38-.126.698.698 0 0 1-.38.126h-1.046a.703.703 0 0 1-.705-.702v-.018l-.135.302a.703.703 0 0 1-.644.42l-.897-.002zm14.531-2.802c0 .774.186 1.265.548 1.627.354.361.98.47 1.476.47h1.195l.383-.95h2.12l.398.95h2.076V1.766l1.935 3.198h1.445V.703h-1.044v2.966L31.552.702h-1.555v4.03L28.271.702h-1.528L25.3 4.052h-.457c-.266 0-.553-.05-.711-.22-.191-.215-.282-.544-.282-1 0-.446.119-.785.293-.964.202-.198.413-.253.784-.253h.967V.702h-.986c-.704 0-1.22.157-1.55.497-.433.457-.546 1.035-.546 1.666zm2.12-.546c-.239 0-.263.024-.293.053-.01.013-.08.166-.08.462 0 .292.046.432.08.496a.82.82 0 0 0 .2.02l.444-1.03-.35-.001zm-3.66 2.644h1.042V.703h-1.042v4.26zm-4.69 0h1.021v-1.55h1.094c.367 0 .595.033.744.182.185.205.16.574.16.83l.005.537h1.03v-.836c0-.38-.025-.57-.17-.781a1.193 1.193 0 0 0-.505-.359 1.2 1.2 0 0 0 .718-1.135c0-.475-.193-.753-.516-.944-.33-.19-.714-.204-1.235-.204h-2.347v4.26h.001zm-4.115 0h3.408V4.08h-2.388v-.85h2.331v-.874h-2.33V1.59h2.387V.702h-3.408v4.26zm-4.186 0h.897l1.48-3.337.003 3.337h1.046V.703h-1.7l-1.226 2.89L7.446.703H5.781v4.033L4.044.702H2.53L.703 4.962h1.109l.396-.95h2.124l.392.95H6.8V1.624l1.481 3.34z'
              ></path>
            </svg>
          </div>
          <div className='payment-type apple_pay'>
            <svg
              width='60'
              height='29'
              viewBox='229 0 60 29'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill='currentColor'
                fillRule='evenodd'
                d='M244.37 11.6c.03 3.3 3 4.4 3.04 4.4 0 .1-.4 1.58-1.5 3.12-.9 1.33-1.9 2.65-3.4 2.68-1.5.03-2-.87-3.7-.87s-2.27.84-3.7.9c-1.5.05-2.62-1.44-3.57-2.77-1.96-2.7-3.45-7.65-1.45-11 1-1.65 2.76-2.7 4.68-2.73 1.47-.03 2.85.95 3.74.95.9 0 2.57-1.17 4.33-1 .75.03 2.8.3 4.15 2.16-.1.07-2.44 1.4-2.42 4.16m-2.83-8.12c.8-.92 1.3-2.2 1.16-3.48-1.15.04-2.5.73-3.35 1.65-.72.82-1.36 2.13-1.2 3.38 1.28.1 2.58-.62 3.37-1.55zM253 1.9c.6-.1 1.22-.12 1.93-.2.7-.1 1.46-.12 2.3-.12 1.2 0 2.26.14 3.14.43.88.3 1.6.7 2.16 1.2.5.5.87 1.1 1.15 1.7.27.7.4 1.4.4 2.3 0 1-.18 1.9-.56 2.7-.4.77-.9 1.4-1.53 1.9-.7.56-1.4.9-2.3 1.2-.9.27-1.9.4-2.9.4s-1.8-.07-2.4-.2v8.47h-1.5V1.97zm1.42 9.9c.35.1.7.2 1.15.2.44.1.9.1 1.38.1 1.8 0 3.2-.4 4.2-1.2s1.5-2.04 1.5-3.63c0-.76-.13-1.43-.4-2-.25-.57-.63-1.03-1.1-1.4-.5-.36-1.07-.63-1.73-.82-.68-.2-1.4-.27-2.2-.27-.67 0-1.2.02-1.7.07-.47.04-.84.1-1.13.16v8.9zm21 6.4c0 .6 0 1.16.02 1.7 0 .6.08 1.15.18 1.68h-1.33l-.2-2h-.1c-.2.27-.4.55-.7.82-.3.27-.6.52-1 .74-.4.23-.8.4-1.3.55-.5.1-1 .2-1.6.2-.7 0-1.3-.1-1.88-.4-.5-.2-.96-.5-1.3-.9-.35-.38-.6-.8-.8-1.27-.15-.47-.23-.94-.23-1.4 0-1.68.72-2.97 2.16-3.87 1.44-.9 3.62-1.33 6.52-1.3v-.37c0-.38-.06-.8-.1-1.3-.1-.47-.26-.93-.5-1.36-.25-.4-.6-.8-1.1-1.1-.48-.3-1.13-.4-1.96-.4-.6 0-1.2.1-1.85.3-.6.17-1.16.43-1.67.77l-.45-1.03c.64-.4 1.3-.72 2-.9.7-.2 1.4-.3 2.14-.3 1 0 1.83.16 2.47.5.62.32 1.12.76 1.5 1.3.35.52.6 1.1.73 1.8.1.63.2 1.3.2 1.93v5.58zM274 14c-.78 0-1.58 0-2.4.1-.85.08-1.6.25-2.33.5-.7.27-1.3.66-1.74 1.17-.46.5-.7 1.2-.7 2.03 0 1 .3 1.73.9 2.2.57.47 1.23.7 1.95.7.6 0 1.1-.1 1.6-.24.44-.16.84-.37 1.2-.63.33-.26.62-.56.85-.9.22-.32.4-.67.52-1.02.1-.4.15-.6.15-.8V14zm4.2-6.6l3.7 9.2c.2.5.37 1.06.56 1.6.2.54.34 1.03.5 1.5h.04l.48-1.47.6-1.7 3.46-9.1h1.5l-4.2 10.37-1.2 3c-.35.87-.73 1.7-1.1 2.4-.4.7-.78 1.34-1.18 1.9-.4.54-.84 1.03-1.3 1.44-.6.5-1.1.87-1.58 1.1-.47.2-.8.35-.95.4l-.5-1.14c.36-.16.77-.36 1.2-.62.46-.25.9-.6 1.3-1 .38-.35.77-.82 1.2-1.4.44-.58.83-1.28 1.17-2.1.12-.32.18-.52.18-.62 0-.12-.06-.33-.18-.6l-5.2-13.1h1.5z'
              ></path>
            </svg>
          </div>
          <div className='payment-type diners_club'>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='15'>
              <path
                fill='currentColor'
                d='M9.193 11.549V3.424a4.356 4.356 0 0 1 2.812 4.062 4.36 4.36 0 0 1-2.812 4.063zm-1.583 3.45h3.55c4.126.02 7.89-3.343 7.89-7.434 0-4.475-3.765-7.567-7.89-7.565H7.61C3.437-.002 0 3.092 0 7.565 0 11.657 3.436 15.02 7.61 15zM7.627.62c3.815.001 6.907 3.075 6.907 6.868 0 3.792-3.091 6.865-6.907 6.867C3.813 14.352.721 11.28.721 7.487.72 3.694 3.813.62 7.627.619zM3.25 7.486a4.36 4.36 0 0 1 2.81-4.062v8.123a4.355 4.355 0 0 1-2.81-4.06z'
              ></path>
            </svg>
          </div>
          <div className='payment-type discover'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='13'
              viewBox='0 0 28 13'
            >
              <path
                fill='currentColor'
                fillRule='nonzero'
                d='M20.163 3.978h-2.075V.11h2.075v.655H18.82v.859h1.294v.655H18.82v1.044h1.343v.655zm1.218 0h-.732V.11h1.086c.843 0 1.327.418 1.327 1.142 0 .593-.304.98-.854 1.097l1.18 1.629h-.9l-1.013-1.554h-.094v1.554zm0-2.088h.212c.468 0 .716-.208.716-.597 0-.376-.247-.573-.703-.573h-.225v1.17zm-5.244 2.187L17.757.11h-.792l-1.014 2.597-1-2.597h-.799l1.592 3.966h.393zM23.344.5h-.08V.16h.107c.08 0 .125.037.125.105a.093.093 0 0 1-.072.095l.108.14h-.096l-.093-.132V.5zm0-.189h.012c.039 0 .06-.014.06-.044s-.02-.044-.059-.044h-.013V.31zM3.424 3.978h.731V.11h-.73v3.868zm-.337-1.93c0 .568-.253 1.118-.68 1.483-.361.308-.771.447-1.338.447H0V.111h1.073C2.259.11 3.087.906 3.087 2.047zm-.754-.007c0-.371-.152-.73-.405-.963-.242-.225-.529-.313-1-.313H.73v2.558h.197c.472 0 .77-.094 1-.307.254-.233.405-.603.405-.975zm10.052 2.073c.895 0 1.655-.608 1.905-1.445.012-.036.019-.072.03-.107l.02-.09c.028-.134.04-.273.04-.416C14.38.921 13.489 0 12.386 0c-.826 0-1.536.518-1.838 1.257a2.094 2.094 0 0 0-.157.8c0 1.136.893 2.057 1.995 2.057zm-3.152-.05c.316 0 .586-.063.918-.225V2.95c-.293.302-.552.425-.883.425-.737 0-1.26-.551-1.26-1.334 0-.742.54-1.329 1.226-1.329.35 0 .614.13.917.436V.26a1.82 1.82 0 0 0-.9-.238c-1.108 0-1.997.9-1.997 2.024 0 1.136.865 2.017 1.98 2.017zM23.1.329a.29.29 0 0 1 .289-.296c.154 0 .283.134.283.296a.292.292 0 0 1-.283.297.291.291 0 0 1-.289-.297zm.058.001c0 .134.104.243.228.243.126 0 .228-.11.228-.243s-.103-.243-.228-.243-.228.108-.228.243zM27.072 13V5.593S20.04 10.71 7.159 13h19.913V13zM5.945 1.594c-.44-.167-.569-.279-.569-.487 0-.244.23-.429.546-.429.219 0 .4.093.59.314l.383-.518A1.617 1.617 0 0 0 5.792.046c-.664 0-1.169.475-1.169 1.108 0 .532.235.805.922 1.06.287.104.433.174.506.22.147.098.22.238.22.4 0 .314-.242.547-.568.547-.348 0-.63-.18-.798-.517l-.474.47c.338.51.742.737 1.298.737.762 0 1.295-.522 1.295-1.27 0-.615-.248-.894-1.079-1.207z'
              ></path>
            </svg>
          </div>
          <div className='payment-type jcb'>
            <svg
              width='33'
              height='28'
              viewBox='0 0 33 28'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill='currentColor'
                fillRule='evenodd'
                d='M9.429 23.333C9.429 25.9 7.307 28 4.714 28H0V4.667C0 2.1 2.121 0 4.714 0H9.43v23.333zm11.785 0C21.214 25.9 19.093 28 16.5 28h-4.714V4.667C11.786 2.1 13.907 0 16.5 0h4.714v23.333zm11.786 0C33 25.9 30.879 28 28.286 28H23.57V4.667C23.571 2.1 25.693 0 28.286 0H33v23.333z'
              ></path>
            </svg>
          </div>
          <div className='payment-type master'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='14'>
              <path
                fill='currentColor'
                fillRule='evenodd'
                d='M11.53 1.518C9.891 2.8 8.84 4.778 8.84 7s1.051 4.2 2.69 5.482c1.64-1.283 2.69-3.26 2.69-5.482 0-2.22-1.05-4.198-2.69-5.48zM7.934 7c0-2.326 1.026-4.498 2.821-6.002A7.141 7.141 0 0 0 7.112 0C3.184 0 0 3.134 0 7c0 3.865 3.184 6.999 7.11 6.999a7.144 7.144 0 0 0 3.644-.997c-1.795-1.504-2.82-3.676-2.82-6.003zM12.307.997a7.795 7.795 0 0 1 0 12.006 7.156 7.156 0 0 0 3.644.997c3.926 0 7.11-3.134 7.11-7s-3.184-7-7.11-7a7.14 7.14 0 0 0-3.644.997z'
              ></path>
            </svg>
          </div>
          <div className='payment-type paypal'>
            <svg
              width='64'
              height='18'
              viewBox='120 5 64 18'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill='currentColor'
                fillRule='evenodd'
                d='M180.43 6l-2.02 12.83c0 .24.2.47.4.47h2.1c.34 0 .6-.25.68-.58l2-12.6c.02-.25-.17-.47-.42-.47h-2.26c-.2 0-.38.14-.4.34m-25.3 4.2h-2.38c-.23 0-.44.1-.56.3L149 15.3l-1.4-4.65c-.1-.3-.34-.5-.64-.5h-2.32c-.28 0-.48.3-.4.55l2.62 7.66-2.45 3.46c-.2.27 0 .64.36.64h2.36c.2 0 .43-.1.56-.3l7.87-11.34c.2-.28 0-.65-.34-.65m19.2 4.57c-.2 1.35-1.3 2.25-2.65 2.25-.7 0-1.23-.26-1.58-.67-.35-.44-.48-1-.37-1.68.2-1.34 1.3-2.27 2.63-2.27.68 0 1.23.22 1.58.64.38.43.5 1.02.4 1.67m3.3-4.58h-2.35c-.2 0-.36.13-.4.33l-.1.65-.16-.24c-.5-.74-1.67-1-2.8-1-2.6 0-4.8 1.98-5.26 4.75-.23 1.4.1 2.7.87 3.64.7.84 1.73 1.2 2.95 1.2 2.1 0 3.26-1.35 3.26-1.35l-.1.62c-.04.26.15.5.4.5h2.1c.36 0 .64-.25.7-.58l1.27-8.05c.03-.27-.17-.5-.4-.5m-38.34 4.57c-.23 1.36-1.3 2.26-2.65 2.26-.7 0-1.22-.2-1.57-.62-.36-.43-.5-1-.4-1.67.2-1.33 1.3-2.26 2.65-2.26.67 0 1.22.2 1.57.63.4.42.5 1 .4 1.66m3.3-4.58h-2.33c-.2 0-.38.12-.4.32l-.1.66-.18-.24c-.5-.75-1.65-1-2.78-1-2.6 0-4.82 1.97-5.26 4.74-.22 1.4.1 2.7.88 3.62.73.83 1.75 1.2 2.97 1.2 2.1 0 3.28-1.36 3.28-1.36l-.1.65c-.03.24.16.47.4.47h2.13c.32 0 .6-.24.65-.57l1.28-8.05c.05-.25-.15-.48-.4-.48m-14.12.05c-.3 1.84-1.62 1.84-2.92 1.84h-.74l.52-3.28c.03-.2.2-.36.4-.36h.34c.9 0 1.72 0 2.15.5.25.3.33.76.23 1.38m-.6-4.6H123c-.34 0-.62.24-.68.57l-1.98 12.6c-.04.24.15.47.4.47h2.35c.3 0 .6-.25.6-.58l.54-3.4c.04-.34.33-.58.66-.58h1.57c3.23 0 5.1-1.57 5.6-4.68.2-1.35 0-2.42-.64-3.17-.7-.82-1.95-1.25-3.6-1.25m35.63 4.6C163.2 12 161.9 12 160.56 12h-.72l.52-3.25c.02-.2.2-.35.4-.35h.34c.9 0 1.73 0 2.16.5.24.3.32.75.22 1.37m-.58-4.6H158c-.35 0-.63.24-.68.57l-2 12.6c-.03.25.16.48.4.48h2.53c.25 0 .45-.16.5-.4l.55-3.57c.05-.33.34-.57.67-.57h1.55c3.24 0 5.1-1.57 5.6-4.68.2-1.35 0-2.42-.63-3.17-.7-.8-1.98-1.24-3.6-1.24'
              ></path>
            </svg>
          </div>
          <div className='payment-type shopify_pay'>
            <svg
              width='56'
              height='60'
              viewBox='0 0 112 60'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g fill='none' fillRule='evenodd'>
                <g fillRule='nonzero'>
                  <path
                    d='M39.253 24.363a.294.294 0 0 0-.285-.256c-.111 0-2.617-.186-2.617-.186s-1.728-1.712-1.941-1.897c-.19-.185-.559-.136-.703-.093-.024 0-.372.12-.984.306-.582-1.688-1.612-3.219-3.415-3.219h-.162c-.492-.645-1.147-.947-1.68-.947-4.214 0-6.228 5.206-6.86 7.84-1.633.51-2.804.852-2.948.902-.906.278-.933.3-1.05 1.154-.09.648-2.479 18.921-2.479 18.921l18.597 3.444 10.08-2.148c0-.024-3.529-23.66-3.556-23.821h.003zm-7.556-1.852A54.33 54.33 0 0 0 30.13 23v-.349c0-1.018-.144-1.851-.378-2.518.94.14 1.549 1.179 1.945 2.376v.003zm-3.11-2.147c.256.648.415 1.546.415 2.795v.185c-1.024.324-2.125.648-3.25.994.63-2.379 1.83-3.54 2.836-3.974zm-1.242-1.182a.943.943 0 0 1 .54.185c-1.362.626-2.787 2.194-3.39 5.37-.892.274-1.76.527-2.575.78.699-2.407 2.406-6.332 5.425-6.332v-.003z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M38.974 24.085c-.12 0-2.623-.185-2.623-.185s-1.728-1.713-1.941-1.898a.38.38 0 0 0-.259-.114L32.75 50.332l10.08-2.148-3.559-23.821a.4.4 0 0 0-.3-.278h.003z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M29.308 29.59l-1.237 3.65s-1.1-.577-2.43-.577c-1.969 0-2.059 1.225-2.059 1.53 0 1.667 4.396 2.309 4.396 6.222 0 3.073-1.968 5.06-4.633 5.06-3.205 0-4.82-1.962-4.82-1.962l.868-2.8s1.68 1.433 3.088 1.433a1.27 1.27 0 0 0 .93-.346c.245-.231.383-.559.378-.9 0-2.176-3.601-2.269-3.601-5.851 0-3.009 2.176-5.925 6.593-5.925 1.69-.019 2.527.466 2.527.466z'
                    fill='#FFF'
                  ></path>
                  <path
                    d='M59.546 25.409c4.405 0 7.265 2.882 7.265 6.983 0 4.12-2.86 6.961-7.283 6.961H54.26v8.27H51.2V25.409h8.349-.003zm4.123 6.983c0-2.75-1.615-4.333-4.406-4.333h-5.008v8.662h5.008c2.791 0 4.403-1.595 4.403-4.332l.003.003zM73.734 47.9c-3.391 0-5.723-2.086-5.723-5.258 0-2.994 2.13-5.03 6.152-5.03h4.574v-1.691c0-2.182-1.414-3.172-3.659-3.172-2.208 0-3.142.833-3.493 2.018h-2.91c.267-2.898 2.598-4.542 6.503-4.542 3.61 0 6.584 1.515 6.584 5.714v11.683h-2.893v-2.259h-.132c-.847 1.364-2.431 2.537-5.006 2.537h.003zm.828-2.494c2.362 0 4.175-1.561 4.175-3.628v-1.917h-4.325c-2.361 0-3.325 1.154-3.325 2.685 0 1.95 1.666 2.86 3.475 2.86zM99.36 30.503h-3.193l-4.64 14.207h-.131L86.77 30.503h-3.34l6.416 17.33-.264.88c-.465 1.709-1.314 2.687-3.391 2.687-.417 0-1.032-.037-1.317-.08v2.391c.612.099 1.23.148 1.848.148 3.742 0 5.02-2.41 6.002-5.048l.45-1.173 6.185-17.135z'
                    fill='#333'
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div className='payment-type visa'>
            <svg xmlns='http://www.w3.org/2000/svg' width='31' height='10'>
              <path
                fill='currentColor'
                d='M28.101.177h-1.889c-.586 0-1.023.172-1.28.804l-3.63 8.878h2.567s.418-1.193.513-1.455l3.131.004c.073.338.298 1.451.298 1.451h2.269L28.1.177zm-3.015 6.245l.974-2.708c-.013.027.2-.56.326-.925l.165.835.566 2.798h-2.031zm-3.614.267C21.455 8.702 19.784 10 17.214 10c-1.096-.012-2.152-.245-2.724-.516l.344-2.169.315.155c.803.362 1.323.508 2.302.508.703 0 1.455-.298 1.462-.946.005-.425-.315-.727-1.267-1.202-.928-.464-2.157-1.241-2.142-2.633C15.518 1.314 17.221 0 19.637 0c.947 0 1.706.21 2.19.407l-.331 2.1-.22-.112a4.225 4.225 0 0 0-1.83-.371c-.958 0-1.402.43-1.402.833-.005.454.519.753 1.374 1.202 1.413.69 2.065 1.53 2.054 2.63zM0 .277L.031.083h3.791c.511.02.923.197 1.065.787l.825 4.281C4.902 2.912 2.95 1.05 0 .277zM11.056.175l-3.85 9.67-2.588.005-2.19-8.08c1.575 1.088 2.915 2.815 3.387 4.017l.256.997L8.465.177l2.59-.002zm.988-.008h2.446l-1.53 9.688h-2.445L12.044.167z'
              ></path>
            </svg>
          </div>
        </div>
        <div id='social-contact'>
          <a
            className='social-link'
            target='blank'
            href='https://www.facebook.com/Shop-101853621980374'
          >
            <div className='fb-icon'>
              <FacebookIcon style={{ color: 'white', fontSize: 30 }} />
            </div>
          </a>
          <a
            className='social-link'
            target='blank'
            href='https://www.instagram.com/mnml.la/'
          >
            <div className='insta-icon'>
              <InstagramIcon style={{ color: 'white', fontSize: 30 }} />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};
export default DesktopFooter;
