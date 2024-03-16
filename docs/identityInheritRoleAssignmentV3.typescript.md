# `identityInheritRoleAssignmentV3` Submodule <a name="`identityInheritRoleAssignmentV3` Submodule" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityInheritRoleAssignmentV3 <a name="IdentityInheritRoleAssignmentV3" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_inherit_role_assignment_v3 openstack_identity_inherit_role_assignment_v3}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.Initializer"></a>

```typescript
import { identityInheritRoleAssignmentV3 } from '@ithings/cdktf-provider-openstack'

new identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3(scope: Construct, id: string, config: IdentityInheritRoleAssignmentV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config">IdentityInheritRoleAssignmentV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config">IdentityInheritRoleAssignmentV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.resetDomainId">resetDomainId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDomainId` <a name="resetDomainId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.resetDomainId"></a>

```typescript
public resetDomainId(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetUserId` <a name="resetUserId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.resetUserId"></a>

```typescript
public resetUserId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityInheritRoleAssignmentV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.isConstruct"></a>

```typescript
import { identityInheritRoleAssignmentV3 } from '@ithings/cdktf-provider-openstack'

identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.isTerraformElement"></a>

```typescript
import { identityInheritRoleAssignmentV3 } from '@ithings/cdktf-provider-openstack'

identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.isTerraformResource"></a>

```typescript
import { identityInheritRoleAssignmentV3 } from '@ithings/cdktf-provider-openstack'

identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.generateConfigForImport"></a>

```typescript
import { identityInheritRoleAssignmentV3 } from '@ithings/cdktf-provider-openstack'

identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityInheritRoleAssignmentV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityInheritRoleAssignmentV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityInheritRoleAssignmentV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_inherit_role_assignment_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityInheritRoleAssignmentV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.roleIdInput">roleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.roleId">roleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.userId">userId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.roleIdInput"></a>

```typescript
public readonly roleIdInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityInheritRoleAssignmentV3Config <a name="IdentityInheritRoleAssignmentV3Config" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.Initializer"></a>

```typescript
import { identityInheritRoleAssignmentV3 } from '@ithings/cdktf-provider-openstack'

const identityInheritRoleAssignmentV3Config: identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.roleId">roleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_inherit_role_assignment_v3#role_id IdentityInheritRoleAssignmentV3#role_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.domainId">domainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_inherit_role_assignment_v3#domain_id IdentityInheritRoleAssignmentV3#domain_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.groupId">groupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_inherit_role_assignment_v3#group_id IdentityInheritRoleAssignmentV3#group_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_inherit_role_assignment_v3#id IdentityInheritRoleAssignmentV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_inherit_role_assignment_v3#project_id IdentityInheritRoleAssignmentV3#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_inherit_role_assignment_v3#region IdentityInheritRoleAssignmentV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.userId">userId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_inherit_role_assignment_v3#user_id IdentityInheritRoleAssignmentV3#user_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_inherit_role_assignment_v3#role_id IdentityInheritRoleAssignmentV3#role_id}.

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_inherit_role_assignment_v3#domain_id IdentityInheritRoleAssignmentV3#domain_id}.

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_inherit_role_assignment_v3#group_id IdentityInheritRoleAssignmentV3#group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_inherit_role_assignment_v3#id IdentityInheritRoleAssignmentV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_inherit_role_assignment_v3#project_id IdentityInheritRoleAssignmentV3#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_inherit_role_assignment_v3#region IdentityInheritRoleAssignmentV3#region}.

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@ithings/cdktf-provider-openstack.identityInheritRoleAssignmentV3.IdentityInheritRoleAssignmentV3Config.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/identity_inherit_role_assignment_v3#user_id IdentityInheritRoleAssignmentV3#user_id}.

---



