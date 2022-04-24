// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract SimpleAuction{
    //Parameters of simple auction
    address payable public beneficiary;
    uint public auctionEndTime;

    //Auction end time current state
    //address of the highest bidder
    address public highestBidder;
    //highest bid value
    uint public highestBid;

    //to keep track of addresses 
    mapping(address => uint) public pendingReturn;

    //track weather auction has ended 
    bool ended = false; 

    //highest bidder finder
    event HighestBidIncrease(address bidder, uint amount);
    //did auction end
    event auctionEnded(address winner, uint amount);

    //triggered when function is just created 
    constructor(uint _biddingTime, address payable _beneficiary){
        beneficiary = _beneficiary;
        auctionEndTime = block.timestamp + _biddingTime;
    }

    //bidding functionality
    function bid() public payable {
        if (block.timestamp > auctionEndTime){
            revert("The auction has ended");
        }
        //if this isnt the highest bid
        if(msg.value <= highestBid){
            revert("Not a high enough bid - Higher bid exists");
        } 

        if(highestBid != 0){
            pendingReturn[highestBidder] += highestBid;
        }

        highestBidder = msg.sender;
        highestBid = msg.value;
        //send the current winner info
        emit HighestBidIncrease(msg.sender, msg.value);

    }
    //withdraw from bidding functioanlity - withdraws underbidders
    function withdraw() public returns(bool){
        uint amount = pendingReturn[msg.sender];
        if(amount > 0){
            pendingReturn[msg.sender] = 0; //to withdraw them
            //return the amount
            if(!(payable(msg.sender).send(amount))){
                pendingReturn[msg.sender] = amount;
                return false; //transfer failed
            }
            
        }
        return true;
    }
    //timer functionality
    function auctionEnd() public {
        if(block.timestamp < auctionEndTime){
            revert("Active Auction!");
        }
        if(ended){
            revert("The auction is over");
        }
        ended = true; 
        emit auctionEnded(highestBidder, highestBid);
        beneficiary.transfer(highestBid);
    }
}


//Credits: Youtube tutorials:
//https://www.youtube.com/watch?v=fx-806zVXP0
//https://www.youtube.com/watch?v=coQ5dg8wM2o
