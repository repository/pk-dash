import { Menu } from "@mantine/core";
import type { PropsWithChildren } from "react";
import React from "react";
import type { IconType } from "react-icons";
import type { PolymorphicComponentPropWithRef, PolymorphicRef } from "~/util/polymorphic";

export type NavbarProfileMenuItemProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  PropsWithChildren<{
    icon?: IconType;
  }>
>;

type NavbarProfileMenuItemComponent = <C extends React.ElementType = "div">(
  props: NavbarProfileMenuItemProps<C>,
) => JSX.Element;

export default React.forwardRef(function NavbarProfileMenuItem<C extends React.ElementType = "div">(
  { as, icon, className, children, ...props }: NavbarProfileMenuItemProps<C>,
  ref: PolymorphicRef<C>,
) {
  const Component = as ?? "div";
  const Icon = icon;

  return (
    // @ts-expect-error polymorphic component
    <Menu.Item {...props} component={Component} className="default-transition default-interactable default-focus">
      <div ref={ref} className={"flex items-center text-base dark:text-white" + (className ? ` ${className}` : "")}>
        {Icon && <Icon className="ltr:mr-1.5 rtl:ml-1.5" size={20} />}
        {children}
      </div>
    </Menu.Item>
  );
}) as NavbarProfileMenuItemComponent;
