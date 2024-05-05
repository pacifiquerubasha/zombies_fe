import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { colors } from '../assets/colors';

interface Props{
    isOpen: boolean,
    onClose: ()=>void
}

const LogoutAlert : React.FC<Props> = ({isOpen, onClose})=> {

    const {setUser} = useContext(AppContext);

    const navigate = useNavigate();
    const cancelRef = React.useRef<HTMLButtonElement>(null);
    const handleLogout = ()=>{
        localStorage.removeItem('zombie__token');
        localStorage.removeItem('zombie__user');
        setUser(null);
        navigate('/login');
    }

    return (
        <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay
        bg='blackAlpha.700'
        >
          <AlertDialogContent mx={'2.5%'} overflow={'hidden'} bg={colors.darkbrown}>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Logout
            </AlertDialogHeader>

            <AlertDialogBody>
                Are you sure you want to logout?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose} bg={'transparent'} _hover={{bg:'transparent'}}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleLogout} ml={3}>
                Logout
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
}

export default LogoutAlert;