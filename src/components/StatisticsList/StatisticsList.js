import PropTypes from 'prop-types';
import StatListItem from '../StatListItem';

const StatisticsList = ({
    good,
    bad,
    neutral,
    totalReviews,
    positive,
}) => {
    return (
        <div>
            <ul>
                <StatListItem label={'Good'} value={good} />
                <StatListItem label={'Bad'} value={bad} />
                <StatListItem
                    label={'Neutral'}
                    value={neutral}
                />

                <StatListItem
                    label={'Total'}
                    value={totalReviews}
                />

                <StatListItem
                    label={' Positive percentage'}
                    value={`${positive}%`}
                />
            </ul>
        </div>
    );
};

StatisticsList.propTypes = {
    totalReviews: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
};

export default StatisticsList;
