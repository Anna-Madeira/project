import { Form } from '@unform/web';
import type { FormHandles, FormHelpers } from '@unform/core';
import type { FormEvent, FormHTMLAttributes, ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- data shape is defined per-form by whoever passes onSubmit
type TVFormProps<T = any> = Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> & {
  children: ReactNode;
  initialData?: Record<string, unknown>;
  onSubmit: (data: T, helpers: FormHelpers, event?: FormEvent) => void;
};

export const VForm = Form as ForwardRefExoticComponent<TVFormProps & RefAttributes<FormHandles>>;
