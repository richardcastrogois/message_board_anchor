use anchor_lang::prelude::*;

declare_id!("91CoCZdxsxuJL1VQvDz6N6LLyQYPv49tNKt7xLBQcDtK");

#[program]
pub mod message_board {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, message: String) -> Result<()> {
        let board = &mut ctx.accounts.board;
        board.author = ctx.accounts.user.key();
        board.message = message;
        board.update_count = 0;
        Ok(())
    }

    pub fn update_message(ctx: Context<UpdateMessage>, message: String) -> Result<()> {
        let board = &mut ctx.accounts.board;
        board.message = message;
        board.update_count += 1;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 32 + 4 + 280 + 8)]
    pub board: Account<'info, MessageBoard>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UpdateMessage<'info> {
    #[account(mut)]
    pub board: Account<'info, MessageBoard>,
}

#[account]
pub struct MessageBoard {
    pub author: Pubkey,
    pub message: String,
    pub update_count: u64,
}