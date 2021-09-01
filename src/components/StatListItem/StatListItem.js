import { title } from './StatListItem.module.css';
import PropTypes from 'prop-types';

const StatListItem = ({ label, value }) => {
    return (
        <li className={title}>
            {label}:{value}
        </li>
    );
};

StatListItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};
export default StatListItem;
