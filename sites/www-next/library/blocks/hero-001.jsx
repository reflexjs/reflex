import * as React from "react"

export default function Block({
  subheading,
  heading,
  text,
  image,
  imagePosition = "right",
  buttons,
  children,
  ...props
}) {
  return (
    <section py="6|12|20" {...props}>
      <div variant="container">
        <div
          display="grid"
          gridAutoFlow="dense"
          col="1|1|2"
          gap="8|8|12"
          alignItems="center"
        >
          {image && (
            <img
              colStart={`null|null|${imagePosition === "left" ? 1 : 2}`}
              w="full"
              rounded="lg"
              overflow="hidden"
              {...image}
            />
          )}
          <div
            d="flex"
            flexDirection="column"
            alignItems="center|flex-start"
            textAlign="center|left"
          >
            {subheading && <p variant="subheading">{subheading}</p>}
            {heading && (
              <h1 variant="heading.h1" fontWeight="bolder" lineHeight="tight">
                {heading}
              </h1>
            )}
            {text && (
              <p variant="text.lead" mt="2">
                {text}
              </p>
            )}
            {buttons}
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
