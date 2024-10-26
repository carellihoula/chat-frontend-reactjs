import { FriendRequest, Person } from "../types__interfaces/interface";
import { getAuthHeaders } from "../utils/getAuthHeaders";

export async function searchUserByEmail(email: string): Promise<Person> {
  const response = await fetch(
    `http://localhost:3000/api/users/search?email=${encodeURIComponent(email)}`,
    {
      method: "GET",
      headers: getAuthHeaders(),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.message || `Erreur ${response.status}: ${response.statusText}`
    );
  }

  const userData = await response.json();

  // Mapper _id à id
  const user: Person = {
    id: userData._id,
    username: userData.username,
    email: userData.email,
    avatar: userData.avatar,
    status: userData.status,
    friends: userData.friends || [],
    friendRequests: userData.friendRequests || [],
  };

  return user;
}

//Envoyer une demande d'ami
export async function sendFriendRequest(recipientId: string): Promise<void> {
  const response = await fetch(
    "http://localhost:3000/api/users/friend-request",
    {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify({ recipientId }),
    }
  );
  const data = await response.json();
  if (!response.ok) {
    const errorMessage =
      data.message || `Erreur ${response.status}: ${response.statusText}`;
    throw new Error(errorMessage);
  }
}

//Récupérer les demandes d'ami
export async function getFriendRequests(): Promise<{
  sentRequests: FriendRequest[];
  receivedRequests: FriendRequest[];
}> {
  const response = await fetch("/api/friendrequests", {
    method: "GET",
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.message || `Erreur ${response.status}: ${response.statusText}`
    );
  }

  const data = await response.json();

  // Mapper _id à id pour les demandes d'ami
  const mapFriendRequest = (fr: any): FriendRequest => ({
    id: fr._id,
    requester: {
      id: fr.requester._id,
      username: fr.requester.username,
      email: fr.requester.email,
      avatar: fr.requester.avatar,
      status: fr.requester.status,
      friends: fr.requester.friends || [],
      friendRequests: fr.requester.friendRequests || [],
    },
    recipient: {
      id: fr.recipient._id,
      username: fr.recipient.username,
      email: fr.recipient.email,
      avatar: fr.recipient.avatar,
      status: fr.recipient.status,
      friends: fr.recipient.friends || [],
      friendRequests: fr.recipient.friendRequests || [],
    },
    status: fr.status,
    createdAt: fr.createdAt,
    updatedAt: fr.updatedAt,
  });

  const sentRequests = data.sentRequests.map(mapFriendRequest);
  const receivedRequests = data.receivedRequests.map(mapFriendRequest);

  return { sentRequests, receivedRequests };
}

//accepter une demande
export async function acceptFriendRequest(requestId: string): Promise<void> {
  const response = await fetch(`/api/friendrequests/accept/${requestId}`, {
    method: "POST",
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.message || `Erreur ${response.status}: ${response.statusText}`
    );
  }
}

//rejeter une demande
export async function rejectFriendRequest(requestId: string): Promise<void> {
  const response = await fetch(`/api/friendrequests/reject/${requestId}`, {
    method: "POST",
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.message || `Erreur ${response.status}: ${response.statusText}`
    );
  }
}
