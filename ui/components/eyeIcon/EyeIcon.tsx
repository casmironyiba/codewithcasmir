import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styled from 'styled-components';
import displayFlex from '@/fp/displayFlex';
import remsize from '@/fp/remsize';
import { colors } from './Themes';
import boxProperty from '@/fp/boxProperty';

const Container = styled.div`
  ${boxProperty(remsize(50),remsize(50),``,remsize(2),colors.$pink)};
#eyeOpen {
    display:none
  }
`;



export default function EyeIcon() {
  return (
    <Container>
      <VisibilityOffIcon 
        id='eyeClose'
      />
      <VisibilityIcon 
        id='eyeOpen'
      />
    </Container> 
  )
}
