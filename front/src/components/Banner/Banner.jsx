import './Banner.css';

//composant Banner utilisé sur la page d'accueil et la page à propos//
export default function Banner({ src, text, alt }) {
  return (
    <aside className="banner">
      <img className="img-banner" src={src} alt={alt} />
      <p className="text"> {text} </p>
    </aside>
  );
}
// import ImgBannerAPropos from '../../assets/bannerAPropos.svg';
// import './banner.css';

// //composant Banner utilisé sur la page d'accueil et la page à propos//
// export default function Banner({ src, text, alt }) {
//   return src !== ImgBannerAPropos ? (
//     <aside className="banner">
//       <img className="img-banner" key={src.id} src={src} alt={alt} />
//       <p className="text"> {text} </p>
//     </aside>
//   ) : (
//     <aside className="banner-APropos">
//       <img className="img-banner" key={src.id} src={src} alt={alt} />
//     </aside>
//   );
// }
