import { v4 as uuid } from 'uuid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FemaleIcon from '@mui/icons-material/Female';
import BrushIcon from '@mui/icons-material/Brush';
import SchoolIcon from '@mui/icons-material/School';
import PaletteIcon from '@mui/icons-material/Palette';
import IcecreamIcon from '@mui/icons-material/Icecream';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import NoMealsIcon from '@mui/icons-material/NoMeals';
import GamepadIcon from '@mui/icons-material/Gamepad';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import GrassIcon from '@mui/icons-material/Grass';

const identitymodel = [
  {
    id: uuid(),
    icon: <AccessTimeIcon fontSize="small" color = "secondary" sx={{ margin: '4px' }}/>,
    name: 'Tempat Tanggal Lahir',
    desc: 'Malang, 28 Januari 1998',
  },
  {
    id: uuid(),
    icon: <AcUnitIcon fontSize="small" color = "secondary" sx={{ margin: '4px' }}/>,
    name: 'Zodiac',
    desc: 'Aquarius(senang main air)',
  },
  {
    id: uuid(),
    icon: <FemaleIcon fontSize="small" color = "secondary" sx={{ margin: '4px' }}/>,
    name: 'Gender',
    desc: 'Female tulen',
  },
  {
    id: uuid(),
    icon: <BrushIcon fontSize="small" color = "secondary" sx={{ margin: '4px' }}/>,
    name: 'Job',
    desc: 'Pattern Designer(aku tau beb skrg ada pattern designer!!!)',
  },
  {
    id: uuid(),
    icon: <SchoolIcon fontSize="small" color = "secondary" sx={{ margin: '4px' }}/>,
    name: 'Education',
    desc: 'TK Muslimat, SD Sabilillah, SMP 5, SMA 2(Same as me), UB(Same as me too)',
  },
  {
    id: uuid(),
    icon: <PaletteIcon fontSize="small" color = "secondary" sx={{ margin: '4px' }}/>,
    name: 'Fav color',
    desc: 'hehe pink bukan ya?',
  },
  {
    id: uuid(),
    icon: <IcecreamIcon fontSize="small" color = "secondary" sx={{ margin: '4px' }}/>,
    name: 'Fav Snack',
    desc: 'Tela Tela',
  },
  {
    id: uuid(),
    icon: <VolunteerActivismIcon fontSize="small" color = "secondary" sx={{ margin: '4px' }}/>,
    name: 'Fav person',
    desc: 'me! Hehe',
  },
  {
    id: uuid(),
    icon: <NoMealsIcon fontSize="small" color = "secondary" sx={{ margin: '4px' }}/>,
    name: 'Makanan tidak favorit',
    desc: '(acu ndak ceneng) coto',
  },
  {
    id: uuid(),
    icon: <GamepadIcon fontSize="small" color = "secondary" sx={{ margin: '4px' }}/>,
    name: 'Codm rank',
    desc: 'grandmaster 3 (sebelum kereset ganti season)',
  },
  {
    id: uuid(),
    icon: <SportsHockeyIcon fontSize="small" color = "secondary" sx={{ margin: '4px' }}/>,
    name: 'Senjata favorit',
    desc: 'Shotgun',
  },
  {
    id: uuid(),
    icon: <GrassIcon fontSize="small" color = "secondary" sx={{ margin: '4px' }}/>,
    name: 'Current hobby',
    desc: 'merawat anak2(sayur kangkung, sawi, cupang)',
  },
];

export default identitymodel;
