"use client";

type ProtectedEmailProps = {
  className?: string;
  iconOnly?: boolean;
};

function getEmail() {
  return ["vicam2001", "mail", "ru"];
}

export function ProtectedEmail({ className = "", iconOnly = false }: ProtectedEmailProps) {
  function openEmail() {
    const [name, host, zone] = getEmail();
    window.location.href = `mailto:${name}@${host}.${zone}`;
  }

  return (
    <button
      className={className}
      type="button"
      onClick={openEmail}
      aria-label="Написать Виктору по email"
      title="Написать Виктору"
    >
      {iconOnly ? <EmailIcon /> : "Написать Виктору"}
    </button>
  );
}

export function ObfuscatedEmailText() {
  return <span>vicam2001 [at] mail [dot] ru</span>;
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 5h15A2.5 2.5 0 0 1 22 7.5v9A2.5 2.5 0 0 1 19.5 19h-15A2.5 2.5 0 0 1 2 16.5v-9A2.5 2.5 0 0 1 4.5 5Zm.2 2 7.3 5.1L19.3 7H4.7Zm15.3 2.1-7.4 5.1a1 1 0 0 1-1.2 0L4 9.1v7.4c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V9.1Z" />
    </svg>
  );
}
