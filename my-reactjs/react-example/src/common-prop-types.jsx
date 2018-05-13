import PropTypes from 'prop-types';

let __allPropTypes = {
    ContentPropTypes: {
        name: PropTypes.string,
        propArray: PropTypes.array.isRequired,
        propBool: PropTypes.bool.isRequired,
        propFunc: PropTypes.func,
        propNumber: PropTypes.number,
        propString: PropTypes.string,
    }
};

export default __allPropTypes;
