import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

const Button = ({
  text, loading, disabled, ...other
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.button(disabled)}
      {...other}
    >
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={styles.text(disabled)}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: (disabled) => ({
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: disabled ? '#cccccc' : '#f44336',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }),
  text: (disabled) => ({
    fontSize: 14,
    fontWeight: '500',
    color: disabled ? '#838383' : 'white',
  }),
});

Button.propTypes = {
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
  disabled: false,
};

export default Button;
