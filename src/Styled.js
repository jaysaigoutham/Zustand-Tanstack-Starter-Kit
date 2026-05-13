import styled, { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    pageBg: 'papayawhip',
    navBg: 'burlywood',
    footerBg: 'chocolate',
    buttonBg: 'bisque',
    buttonBorder: 'chocolate',
  },
  spacing: {
    xs: '0.25em',
    sm: '1em',
  },
  radius: {
    sm: '3px',
  },
  input: {
    width: '300px',
  },
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.pageBg};
  }
`

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.buttonBg};
  font-size: 1em;
  margin: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border: 2px solid ${({ theme }) => theme.colors.buttonBorder};
  border-radius: ${({ theme }) => theme.radius.sm};
`

export const Input = styled.input`
  margin: ${({ theme }) => theme.spacing.xs};
  width: ${({ theme }) => theme.input.width};
`

export const Page = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.pageBg};
`

export const Navigation = styled.div`
  background: ${({ theme }) => theme.colors.navBg};
  padding: ${({ theme }) => theme.spacing.sm};
`

export const Footer = styled.div`
  background: ${({ theme }) => theme.colors.footerBg};
  padding: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
`