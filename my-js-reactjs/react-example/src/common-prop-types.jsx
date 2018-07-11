import PropTypes from 'prop-types';

let common_prop_types = {

    ContentPropTypes1: {
        name: PropTypes.string,
        propArray: PropTypes.array.isRequired,
        propBool: PropTypes.bool.isRequired,
        propFunc: PropTypes.func,
        propNumber: PropTypes.number,
        propString: PropTypes.string,
    }

};

export default common_prop_types;
