import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { MessageBoard } from "../target/types/message_board";
import { expect } from "chai";

describe("message_board", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.MessageBoard as Program<MessageBoard>;
  const board = anchor.web3.Keypair.generate();

  it("initialize and update message", async () => {
    await program.methods
      .initialize("Mensagem inicial")
      .accounts({
        board: board.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([board])
      .rpc();

    let account = await program.account.messageBoard.fetch(board.publicKey);
    expect(account.message).to.equal("Mensagem inicial");
    expect(account.updateCount.toNumber()).to.equal(0);

    const tx = await program.methods
      .updateMessage("Mensagem atualizada")
      .accounts({
        board: board.publicKey,
      })
      .rpc();

    console.log("[SUCCESS] Update transaction:", tx);

    account = await program.account.messageBoard.fetch(board.publicKey);
    expect(account.message).to.equal("Mensagem atualizada");
    expect(account.updateCount.toNumber()).to.equal(1);
  });
});