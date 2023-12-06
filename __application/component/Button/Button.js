/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  color(props) {
    if (props.kind === 'filled') {
      return props.theme.color.white;
    }
    if (props.kind === 'outlined') {
      return props.theme.color[props.color];
    }
    return '';
  },
  backgroundColor(props) {
    if (props.kind === 'filled') {
      return props.theme.color[props.color || 'secondary'];
    }
    if (props.kind === 'outlined') {
      return props.theme.color.white;
    }
    return '';
  },
  fontSize(props) {
    if (props.size === 'small') {
      return props.theme.fontSize.xs;
    }
    if (props.size === 'medium') {
      return props.theme.fontSize.s;
    }
    if (props.size === 'large') {
      return props.theme.fontSize.s;
    }
    return '';
  },
  padding(props) {
    if (props.size === 'small') {
      return props.theme.px([1, 2]);
    }
    if (props.size === 'medium') {
      return props.theme.px([1.5, 2]);
    }
    if (props.size === 'large') {
      return props.theme.px([2]);
    }
    return '';
  },
  borderColor(props) {
    if (props.kind === 'filled') {
      return props.color[props.color];
    }
    if (props.kind === 'outlined') {
      return props.color[props.color];
    }
    return '';
  },
  borderRadius(props) {
    if (props.shape === 'bluntEdged') {
      return props.theme.borderRadius;
    }
    if (props.shape === 'sharpEdged') {
      return '2px';
    }
    if (props.shape === 'capsular') {
      return props.theme.px(10);
    }
    if (props.shape === 'circular') {
      return '100%';
    }
    return '';
  },
  pointerEvents(props) {
    if (props.disabled) {
      return 'none';
    }
    return '';
  },
  opacity(props) {
    if (props.disabled) {
      return '0.5';
    }
    return '';
  },
  hover: {
    color(props) {
      if (props.kind === 'filled') {
        return props.theme.color.white;
      }
      if (props.kind === 'outlined') {
        return props.theme.color.white;
      }
      return '';
    },
    backgroundColor(props) {
      if (props.kind === 'filled') {
        return props.theme.color[`${props.color}Dark`];
      }
      if (props.kind === 'outlined') {
        return props.theme.color[props.color];
      }
      return '';
    },
    borderColor(props) {
      if (props.kind === 'filled') {
        return props.theme.color[`${props.color}Dark`];
      }
      if (props.kind === 'outlined') {
        return props.theme.color[props.color];
      }
      return '';
    },
  },
};

const StyledButton = styled(
  ({
    color,
    kind,
    size,
    shape,
    fluid,
    isLoading,
    ...props
  }) => <button {...props} />,
)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  color: ${styles.color};
  font-size: ${styles.fontSize};
  background-color: ${styles.backgroundColor};
  padding: ${styles.padding};
  width: ${(props) => props.fluid ? '100%' : ''};
  border-width: 1px;
  border-style: solid;
  border-color: ${styles.borderColor};
  border-radius: ${styles.borderRadius};
  pointer-events: ${styles.pointerEvents};
  opacity: ${styles.opacity};

  &:hover {
    color: ${styles.hover.color};
    background-color: ${styles.hover.backgroundColor};
    border-color: ${styles.hover.borderColor};
  }
`;

function Button({ label, disabled, className, onClick, spin, ...props }) {
  return (
    <StyledButton
      {...props}
      disabled={disabled}
      className={cx(className)}
      onClick={onClick}
    >
      {
        spin ? (
          <>
            <FontAwesomeIcon
              icon="fa-solid fa-spinner"
              spin
              className="disabled-spiner"
            />
            &nbsp;&nbsp;
          </>
        ) : null
      }
      {label}
    </StyledButton>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button']),
  kind: PropTypes.oneOf(['filled', 'outlined']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged', 'capsular', 'circular']),
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  spin: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  label: 'Button',
  onClick: () => {},
  type: 'submit',
  kind: 'filled',
  size: 'medium',
  shape: 'bluntEdged',
  fluid: false,
  disabled: false,
  spin: false,
  className: '',
};

export default Button;
