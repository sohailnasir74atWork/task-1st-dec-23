import styled from 'styled-components';

export const Flex = styled.div`
  padding: ${({ padding }) => padding || 'initial'};
  margin: ${({ margin }) => margin || 'initial'};
  display: flex;

  flex-wrap: ${(props) => {
    if (props.wrapReverse) return 'wrap-reverse';
    if (props.noWrap) return 'nowrap';
    return 'wrap';
  }};

  justify-content: ${(props) => {
    if (props.justifyContent) return props.justifyContent;
    if (props.justifyCenter) return 'center';
    if (props.justifyAround) return 'space-around';
    if (props.justifyBetween) return 'space-between';
    if (props.justifyEnd) return 'flex-end';
    return 'flex-start';
  }};

  align-items: ${(props) => {
    if (props.alignItems) return props.alignItems;
    if (props.alignStretch) return 'stretch';
    if (props.alignEnd) return 'flex-end';
    if (props.alignCenter) return 'center';
    if (props.alignBaseline) return 'baseline';
    return 'flex-start';
  }};

  align-content: ${(props) => {
    if (props.alignContent) return props.alignContent;
    if (props.contentStart) return 'flex-start';
    if (props.contentEnd) return 'flex-end';
    if (props.contentCenter) return 'center';
    if (props.contentBetween) return 'space-between';
    if (props.contentAround) return 'contentAround';
    return 'stretch';
  }};

  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
`;

export const FlexItem = styled.div`
  align-self: ${(props) => {
    if (props.alignSelf) return props.alignSelf;
    if (props.alignStretch) return 'stretch';
    if (props.alignEnd) return 'flex-end';
    if (props.alignCenter) return 'center';
    if (props.alignBaseline) return 'baseline';
  }};
  width: ${(props) => {
    if (props.three) return '33.33%';
    if (props.four) return '25%';
    if (props.five) return '20%';
    if (props.six) return '16%';
    if (props.seven) return '14%';
    return '50%';
  }};
  padding: ${(props) => (props.noPadding ? 0 : '15px')};
`;
