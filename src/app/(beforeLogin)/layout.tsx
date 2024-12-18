interface BeforeLoginLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function BeforeLoginLayout({
  children,
  modal,
}: BeforeLoginLayoutProps) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
