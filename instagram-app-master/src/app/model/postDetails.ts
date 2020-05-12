export interface PostComments {
    username: string;
    comment: string;
}

export interface PostDetails {
    id: number;
    description: string;
    iconUrl: string;
    imageUrl: string;
    username: string;
    comments: PostComments[];
    likes: number;
    isLiked: boolean;
    flaglike: boolean;
}

export function gg(k: PostDetails) {       // funkcija za "brishenje" na srceto pri like
    k.flaglike = false;
}

export function addComment(k: PostDetails, comm: any) {     // funkcija za dodavanje na komentar
    const el: PostComments = {username: '', comment: ''};
    el.username = 'Filip Panchevski';
    el.comment = comm;
    k.comments.push(el);
}


/*
    var len = k.comments.length;
    var newc: PostComments[];
    newc = [];
    var el:PostComments;
    var i:number;
    for(i = 0; i<len; i++)
    {
        el = {username: "F", comment: "s"};
        el.username = k.comments[i].username;
        el.comment = k.comments[i].comment;
        newc.push(el);
    }
    el.username = "Filip Panchevski";
    el.comment = comm;
    newc.push(el);

    k.comments = newc;
*/
