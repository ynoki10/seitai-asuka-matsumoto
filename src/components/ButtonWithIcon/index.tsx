import Link, { LinkProps } from 'next/link';
import { ComponentPropsWithRef, createElement, forwardRef } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

// Types
type Tag = 'button' | 'input' | 'a';
type Element = HTMLButtonElement | HTMLInputElement | HTMLAnchorElement;

type Button = {
  tag: 'button';
  type?: ComponentPropsWithRef<'button'>['type'];
  role?: never;
};
type Anchor = {
  tag: 'a';
  linkProps: LinkProps;
  href?: never;
  ref?: never;
  target?: never;
  role?: never;
};
type Input = {
  tag: 'input';
  value: ComponentPropsWithRef<'input'>['value'];
  type: ComponentPropsWithRef<'input'>['type'];
  children?: never;
  role?: never;
};

export type ButtonProps<T extends Tag> = ComponentPropsWithRef<T> &
  (T extends 'button' ? Button : T extends 'a' ? Anchor : Input);

// Utils
const isExternalLink = (href: LinkProps['href']) => {
  const target = typeof href === 'string' ? href : href.href;
  return target?.startsWith('http') || target?.startsWith('//');
};

// Component
const ButtonWithIcon = forwardRef<Element, ButtonProps<Tag>>((props, ref) => {
  if (!props.tag) {
    throw new Error('tag props is required');
  }

  const buttonClassName =
    'bg-green04 rounded-md text-center text-white text-[18px] tracking-widest leading-normal py-2.5 px-4 font-normal flex items-center';

  if (props.tag === 'a') {
    const { tag, linkProps, className, ...otherProps } = props;
    return (
      <Link {...linkProps}>
        {createElement(
          tag,
          {
            ref,
            className: `${buttonClassName} ${className ? className : ''}`,
            ...otherProps,
            role: 'button',
            target: isExternalLink(linkProps.href) ? '_blank' : undefined,
            rel: isExternalLink(linkProps.href) ? 'noopener noreferrer' : undefined,
          },
          <>
            <span className={`w-full`}>{props.children}</span>
            <BsArrowRightShort className={`text-[30px] flex-shrink-0`} />
          </>,
        )}
      </Link>
    );
  }

  const { tag, className, ...otherProps } = props;
  return createElement(tag, {
    ref,
    className: `${buttonClassName} ${className ? className : ''}`,
    type: 'button',
    ...otherProps,
  });
});

ButtonWithIcon.displayName = 'ButtonWithIcon';

export default ButtonWithIcon;
