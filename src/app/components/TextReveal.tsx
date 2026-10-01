import { Children, cloneElement, isValidElement, type ReactNode } from "react";

type TextRevealProps = {
  as?: "h1" | "h2" | "h3" | "p" | "span";
  children: ReactNode;
  id?: string;
  className?: string;
};

function wrapWords(children: ReactNode): ReactNode {
  return Children.map(children, (child) => {
    if (typeof child === "string" || typeof child === "number") {
      return String(child)
        .split(/(\s+)/u)
        .map((part, index) =>
          part === "" || /^\s+$/u.test(part) ? (
            part
          ) : (
            <span className="reveal-word" key={index}>
              {part}
            </span>
          ),
        );
    }

    if (isValidElement<{ children?: ReactNode }>(child)) {
      if (child.props.children === undefined) return child;

      return cloneElement(child, undefined, wrapWords(child.props.children));
    }

    return child;
  });
}

/** Keeps the original text and markup readable before scroll effects start. */
export default function TextReveal({
  as: Tag = "span",
  children,
  id,
  className,
}: TextRevealProps) {
  return (
    <Tag id={id} className={className} data-text-reveal="">
      {wrapWords(children)}
    </Tag>
  );
}
