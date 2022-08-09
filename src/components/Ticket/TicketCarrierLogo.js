import './TicketCarrierLogo.module.scss'
const TicketCarrierLogo = ({ carriers }) => {
    
  return (
    <picture>
      <source srcSet={require(`../../assets/${carriers}.webp`)} />
      <img
        src={require(`../../assets/${carriers}.png`)}
        alt={`${carriers} Logo`}
      />
    </picture>
  );
};

export default TicketCarrierLogo;
