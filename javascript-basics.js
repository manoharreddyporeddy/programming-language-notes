{
  let a = 1;
  let b = 2;
  // console.log(a + b);
}
{
  const ages = [100, 100, 100];
  ages.push(80);
  // console.log(ages);
}
/*
{
  const personLastName = "Abdul";
  console.log(personLastName);
}
*/

{
  /*
  const a = 10;
  const b = 3;
  // console.log('a + b = ', a + b);
  // console.log('a - b = ', a - b);
  // console.log('a * b = ', a * b);
  // console.log('a / b = ', a / b);

  console.log("a % b = ", a % b);
  console.log("a ** 2 = ", a ** 2, a * a);
  console.log("a ** 4 = ", a ** 5);

  let i = 1;
  console.log(i);
  // i++
  i--
  console.log(i);
  */
}
{
  let s1 = "aaa";
  let s2 = "bbb";
  // console.log(s1 + s2);
}
{
  let s1 = "aaa";
  let s2 = "aaa";
  // console.log(s1 == s2);
  // console.log(s1 === s2);
}
{
  let i = 1;
  let j = 2;
  // console.log(i === j);
  // console.log(i > j);
  // console.log(i < j);
}

if (0) {
  let a = 1;
  // console.log(a === 1 ? "one" : "not one");
  /*
  if (a === 1) {
    console.log("one");
  } else {
    console.log("not one");
  }
  */

  let month = 5;
  switch (month) {
    case 1:
      console.log("jan");
      break;
    case 2:
      console.log("feb");
      break;
    case 3:
      console.log("mar");
      break;
    case 4:
      console.log("apr");
      break;
    default:
      console.log("i dont know");
      break;
  }
}

if (0) {
  let a = 0;
  let b = 1;

  if (a && b) {
    console.log("a && b is true");
  } else {
    console.log("a && b is false");
  }

  if (a || b) {
    console.log("a || b is true");
  } else {
    console.log("a || b is false");
  }

  a = 1111;
  console.log("a", a, "!a", !a);
  a = 0;
  a = undefined;
  console.log("a", a, "!a", !a);
}

if (0) {
  let i = 2;
  console.log(i);
  i = 3;
  console.log(i);

  // i++
  i += 1;
  console.log(i);

  i -= 1;
  console.log(i);

  i *= 10;
  console.log(i);
}

if (0) {
  let a = 2 * 10 ** 9;
  console.log(a);
  console.log(typeof a);

  a = 11n;
  console.log(a);
  console.log(typeof a);

  a = "aa";
  console.log(typeof a);
}

if (0) {
  let MOD = BigInt(10 ** 9 + 7);
  let a = [1, 999999999999999, 999999999999999];
  let n = a.length;
  let prod = 1n;
  for (let i = 0; i < n; i++) {
    prod = prod * BigInt(a[i]);
    prod = prod % MOD;
  }
  console.log(prod);
  console.log(Number(prod));
}
if (0) {
  function sum(a, b) {
    let name = "aa";
    return a + b;
  }

  let ans = sum(1, 2);
  console.log(ans);
}

if (0) {
  let studentObj = {
    name: "shanoor",
    age: 28,
    class: 10,
    aadhar: "1111111111",
  };
  console.log(studentObj);
}
if (0) {
  let tenthClass = [
    {
      name: "shanoor",
      age: 28,
      class: 10,
      aadhar: "1111111111",
    },
    {
      name: "tarun",
      age: 26,
      class: 10,
      aadhar: "1111111111",
    },
  ];
  tenthClass[1].name = "venu";
  console.log("tenthClass", tenthClass);

  let tenthClassFiltered = [];
  for (let studentObj of tenthClass) {
    if (studentObj.age > 26) {
      tenthClassFiltered.push(studentObj);
    }
  }
  console.log(tenthClassFiltered);
}

if (0) {
  let s1 = "abc";
  let s2 = "def";
  console.log("s1", s1);
  console.log("s2", s2);

  let s3 = s1 + s2;
  console.log("s1 + s2", s3);
  console.log("s3.length", s3.length);
  console.log("s3.slice(0,1)", s3.slice(0, 1));
  console.log("s3.slice(0,2)", s3.slice(0, 2));
  console.log("s3.slice(0,3)", s3.slice(0, 3));
  console.log("s3.slice(0)", s3.slice(0));
  console.log("s3.slice(1,2)", s3.slice(1, 2));
  console.log("s3.slice(1,s3.length)", s3.slice(1, s3.length));
  console.log(
    "s3.slice(s3.length - 3, s3.length)",
    s3.slice(s3.length - 3, s3.length)
  );
  // =====
  console.log("s3[0]", s3[0]);
  console.log("s3[1]", s3[1]);
  console.log("s3[2]", s3[2]);
  console.log("s3[s3.length - 1]", s3[s3.length - 1]);
  console.log("s3.at(-1)", s3.at(-1));
  console.log("s3.at(-2)", s3.at(-2));
}

if (0) {
  let s = "abc";
  console.log(s);

  s = "abc";
  let arr = s.split("");
  console.log(s);
  console.log(arr);

  s = "abc:def:ghi";
  let arr2 = s.split(":");
  console.log(s);
  console.log(arr2);

  s = "10:25-15:30";
  arr = s
    .split("-") //
    .map((stime) =>
      stime
        .split(":") //
        .reduce(
          (
            sum,
            HHMMarr,
            i //
          ) => sum + +HHMMarr * (i === 0 ? 60 : 1),
          0
        )
    );
  console.log(s);
  console.log(arr);
}

if (0) {
  let s = "abbbc";
  console.log(s);
  console.log(s.replace("b", ""));
  console.log(s.replaceAll("b", ""));
  console.log(s.replaceAll(/b/g, ""));
}

if (0) {
  let ch = "a";
  let cc = ch.charCodeAt(0);
  console.log(ch);
  console.log(cc);
}

if (0) {
  let s = "abcdefgh,,abcdefgh";
  let substring = "cd";
  let index = s.indexOf(substring);
  console.log(s);
  console.log(substring);
  console.log(index);

  console.log(s.includes(substring));
}

if (0) {
  let n1 = 1;
  let n2 = 2;
  let s = `aaaa ${n1} asfaf ${n2} ccccc`;
  console.log(s);
}

{
  let n = 7;
  console.log(n);
  console.log(n.toString(2));
  let bn = "1111";
  console.log(bn);
  console.log(parseInt(bn, 2));
}
