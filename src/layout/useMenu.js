import { useRef, useState } from 'react';
import { useMenuStyles } from './styles';
import { useOnHoverOutside } from '../components/hooks/common';

export default function useMenu(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const currencyDropdownRef = useRef(null);
  const languageDropdownRef = useRef(null);
  const [isCurrencyDropDownOpen, setCurrencyDropDownOpen] = useState(false);
  const [isLanguageDropDownOpen, setLanguageDropDownOpen] = useState(false);

  const onCloseCurrency = () => {
    setCurrencyDropDownOpen(false);
  };
  const onCloseLanguage = () => {
    setLanguageDropDownOpen(false);
  };

  useOnHoverOutside(currencyDropdownRef, onCloseCurrency);
  useOnHoverOutside(languageDropdownRef, onCloseLanguage);

  const classes = useMenuStyles();

  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);
  const container = window !== undefined ? () => window().document.body : undefined;

  return {
    classes,
    handleDrawerToggle,
    container,
    mobileOpen,
    currencyDropdownRef,
    languageDropdownRef,
    isCurrencyDropDownOpen,
    setCurrencyDropDownOpen,
    isLanguageDropDownOpen,
    setLanguageDropDownOpen
  };
}
