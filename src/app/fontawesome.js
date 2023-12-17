
import dynamic from 'next/dynamic';

const FontAwesomeIcon = dynamic(() =>
  import('@fortawesome/react-fontawesome').then((module) => module.FontAwesomeIcon),
  { ssr: false }
);
export default FontAwesomeIcon;