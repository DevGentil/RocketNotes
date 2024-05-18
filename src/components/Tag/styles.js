import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    padding: 5px 14px;
    margin-right: 6px;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-weight: 500;
    font-size: 12px;
`;