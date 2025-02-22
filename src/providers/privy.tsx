import { SolanaSignInInput } from '@solana/wallet-standard-features';

export function createSignInMessageText(
  input: SolanaSignInInput,
  domain: string = 'localhost:3000',
): string {
  let message = `${domain} wants you to sign in with your Solana account:\n`;
  message += `${input.address}`;

  const fields: string[] = [];
  if (input.nonce) {
    fields.push(`Nonce: ${input.nonce}`);
  }
  if (fields.length) {
    message += `\n\n${fields.join('\n')}`;
  }

  return message;
}
