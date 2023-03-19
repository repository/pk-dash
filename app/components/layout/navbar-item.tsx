import type { PropsWithChildren } from "react";
import React from "react";
import type { IconType } from "react-icons";
import type { PolymorphicComponentPropWithRef, PolymorphicRef } from "~/util/polymorphic";

export type NavbarItemProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  PropsWithChildren<{
    active?: boolean;
    icon?: IconType;
  }>
> & {
  className?: string;
};

type NavbarItemComponent = <C extends React.ElementType = "div">(props: NavbarItemProps<C>) => JSX.Element;

export default React.forwardRef(function NavbarItem<C extends React.ElementType = "div">(
  { as, active = false, icon, className, children, ...props }: NavbarItemProps<C>,
  ref: PolymorphicRef<C>,
) {
  const Component = as ?? "div";
  const Icon = icon;

  return (
    <li className="default-interactable">
      <Component
        {...props}
        ref={ref}
        className={
          "default-transition default-focus default-interactable flex h-full items-center px-2" +
          (active ? " default-interactable-active" : "") +
          (className ? ` ${className}` : "")
        }
      >
        {Icon && <Icon className="ltr:mr-1 rtl:ml-1" />}
        {children}
      </Component>
    </li>
  );
}) as NavbarItemComponent;
