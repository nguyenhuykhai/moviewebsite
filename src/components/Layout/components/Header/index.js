import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Natigation from '../../../../pages/Natigation'

const cx = classNames.bind(styles);

function Header() {
    return (
        <>
           <Natigation />
        </>
    );
}

export default Header;
