export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <h2>template</h2>
      <div>
        {children}
      </div>
    </div>
  );
}