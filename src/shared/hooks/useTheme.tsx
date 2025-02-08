import { useContext } from 'react';
import { ThemeContext } from '../../core/providers/ThemeContext';

export const useTheme = () => useContext(ThemeContext);
